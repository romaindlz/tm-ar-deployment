import * as THREE from 'three';
import * as LocAR from 'locar';

//Uvrier
// Coordonnées des points fixes (calibration)
const latPF1 = 46.24678;
const lonPF1 = 7.41180;

const latPF2 = 46.24666;
const lonPF2 = 7.41182;

// Coordonnées object
const latObj = 46.24668;
const lonObj = 7.41200;

/*
//IG Group
// Coordonnées des points fixes (calibration)
const latPF1 = 46.22549;
const lonPF1 = 7.36996;

const latPF2 = 46.22556;
const lonPF2 = 7.36965;

// Coordonnées object
const latObj = 46.22544;
const lonObj = 7.36983;
*/

// "catalogue"
const contenuAR = {
  sphere: {
    type: 'sphere',
    lon: lonObj,
    lat: latObj
  },
  box: {
    type: 'box',
    lon: lonObj,
    lat: latObj
  },
  nav_pf1: {
      type: 'arrow',
      lon: lonPF1,
      lat: latPF1
  },
  nav_pf2: {
      type: 'arrow',
      lon: lonPF2,
      lat: latPF2
    },
};

let locar, scene, camera, renderer;
let deviceOrientationControls;
let elementsActuels = [];

/* ────────────────── FONCTIONS AR ────────────────── */
function hideAllARElements() {
  elementsActuels.forEach(mesh => {
    mesh.visible = false;
    scene.remove(mesh);
  });
  elementsActuels = [];
}

// Creation du modèle représenté par AR
function createMesh(desc) {
  switch (desc.type) {
    case 'box': {
      const [sx, sy, sz] = [5, 5, 5];
      const geom = new THREE.BoxGeometry(sx, sy, sz);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
      });

      return new THREE.Mesh(geom, mat);
    }  
    
    case 'sphere': {
      const geometry = new THREE.SphereGeometry(8, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
      const sphere = new THREE.Mesh(geometry, material);

      return sphere;
    }

    case 'arrow': {
      const height = 8;                    // hauteur totale (en "m")
      const headHeight = height * 0.4;              // partie pointe
      const headRadius  = headHeight * 0.6; // largeur de la pointe
      const color = 0x0000ff;
      const opacity = 0.8;

      const group = new THREE.Group();

      // Matériau commun
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity
      });

      // Tige de la flèche (cylindre)
      const shaftHeight = height - headHeight;
      const shaftRadius = headRadius * 0.25;

      const shaftGeom = new THREE.CylinderGeometry(shaftRadius, shaftRadius, shaftHeight, 16);
      const shaft = new THREE.Mesh(shaftGeom, mat);

      shaft.position.y = shaftHeight / 2;
      group.add(shaft);

      // Pointe (cône)
      const headGeom = new THREE.ConeGeometry(headRadius, headHeight, 16);
      const head = new THREE.Mesh(headGeom, mat);
      head.position.y = shaftHeight + headHeight / 2;
      group.add(head);

      group.rotation.z = Math.PI;

      return group;
      }
    }
}


// Engine pour l'AR
export function AREngine(input) {
  if (!locar || !scene) {
    console.warn('LocAR ou scene non initialisés');
    return;
  }

  // 1) Normaliser l'entrée : objet unique → tableau avec 1 élément
  const elements = Array.isArray(input) ? input : [input];

  console.log('AREngine reçu =', input);
  console.log('Normalisé en tableau =', elements);

  hideAllARElements();

  // 3) Créer et ajouter les nouveaux éléments
  elements.forEach(desc => {

    const mesh = createMesh(desc);

    if (typeof desc.lon !== 'number' || typeof desc.lat !== 'number') {
      console.warn('desc.lon / desc.lat invalides pour', desc);
      return;
    }

    locar.add(mesh, desc.lon, desc.lat);

    elementsActuels.push(mesh);
  });

  console.log('elementsActuels après AREngine =', elementsActuels);
}


// Fonction d'initialisation de l'AR
export function initAREngine(canvas) {
  console.log('INIT AR SCRIPT');

  // Constantes AR
  renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true});
  camera = new THREE.PerspectiveCamera(80,(canvas.clientWidth || 1) / (canvas.clientHeight || 1),0.001,1000);
  scene = new THREE.Scene();

  // LocAR
  locar = new LocAR.LocationBased(scene, camera);
  window.locar = locar;

  // Camera
  const cam = new LocAR.Webcam({ video: { facingMode: 'environment' }, audio: false },null);
  cam.on('webcamstarted', ev => {scene.background = ev.texture;console.log('Webcam started');});
  cam.on('webcamerror', err =>alert(`Webcam error: code ${err.code} message ${err.message}`));

  deviceOrientationControls = new LocAR.DeviceOrientationControls(camera);
  deviceOrientationControls.on('deviceorientationgranted', ev => {
    ev.target.connect();
    console.log('Device motion granted');
  });

  deviceOrientationControls.on('deviceorientationerror', err =>
    alert(`Device orientation error: ${err.message || err}`)
  );

  deviceOrientationControls.init();

  locar.on('gpserror', err => {
    console.error('GPS ERROR', err);
    alert(`GPS error: code ${err.code}, message: ${err.message}`);
  });

  //let firstLocation = true;
  locar.on('gpsupdate');

  let firstFixResolved = false
  const firstFixPromise = new Promise(resolve => {
    locar.on('gpsupdate', ev => {
      if (!firstFixResolved) {
        firstFixResolved = true
        console.log('Premier fix GPS obtenu')
        resolve(ev)
      }
    })
  })


  function resizeToCanvas() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  new ResizeObserver(resizeToCanvas).observe(canvas);
  window.addEventListener('resize', resizeToCanvas);
  window.addEventListener('orientationchange', resizeToCanvas);

  resizeToCanvas();

  console.log('Calling locar.startGps()');
  locar.startGps();

  let animating = true
  function animate() {
    if (!animating) return
    requestAnimationFrame(animate)
    deviceOrientationControls.update?.()
    renderer.render(scene, camera)
  }

  animate()

  return {
    stop() {
      animating = false
      try {
        locar.stopGps?.()
      } catch (e) {
        console.warn('Erreur lors du stopGps:', e)
      }
    },
    async showSphere() {
      await firstFixPromise
      AREngine(contenuAR.sphere)
    },
    async showBox() {
      await firstFixPromise
      AREngine(contenuAR.box)
    },
    async showArrowPf1() {
      await firstFixPromise
      AREngine(contenuAR.nav_pf1)
    },
    async showArrowPf2() {
      await firstFixPromise
      AREngine(contenuAR.nav_pf2)
    }
  }
}