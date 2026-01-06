import * as THREE from 'three';
import * as LocAR from 'locar';
import { COORDS } from '../constants/CoordsPts.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// "catalogue"
const contenuAR = {
  model : {
    type: 'model',
    url: COORDS.modelURL,
    lon: COORDS.lonObj,
    lat: COORDS.latObj
  },
  nav_pf1: {
      type: 'arrow',
      lon: COORDS.lonPF1,
      lat: COORDS.latPF1
  },
  nav_pf2: {
      type: 'arrow',
      lon: COORDS.lonPF2,
      lat: COORDS.latPF2
    },
};

let locar, scene, camera, renderer;
let deviceOrientationControls;
let elementsActuels = [];

// Loader pour le GLB / GLTF
const gltfLoader = new GLTFLoader();

// hauteur approximative des yeux en mètres
const EYE_HEIGHT = 1.6;

/* ────────────────── FONCTIONS AR ────────────────── */
function hideAllARElements() {
  elementsActuels.forEach(mesh => {
    mesh.visible = false;
    scene.remove(mesh);
  });
  elementsActuels = [];
}

// Creation du modèle représenté par AR
async function createMesh(desc) {
  switch (desc.type) {

    case 'model': {
      if (!desc.url) {
        console.warn('desc.url manquant pour un modèle glTF', desc);
        return null;
      }

      return new Promise((resolve, reject) => {
        gltfLoader.load(
          desc.url,
          gltf => {
            const root = gltf.scene;

            root.traverse(obj => {
              if (!obj.isMesh) return;

              obj.material = new THREE.MeshBasicMaterial({
                color: 0x00557F,
                transparent: true,
                opacity: 0.6
              });
            });

            resolve(root);
          },
          undefined,
          error => {
            console.error('Erreur lors du chargement du GLB :', error);

            // Si c'est un event de FileLoader
            if (error && error.target) {
              console.log('Status:', error.target.status);
              console.log('URL:', error.target.responseURL);
              console.log('Response:', error.target.responseText?.slice(0, 200));
            }

            console.log('❌ Erreur lors du chargement du GLB (voir console)');
          }
        );
      });
    }

    case 'arrow': {
      const height = 2;                    // hauteur totale (en "m")
      const headHeight = 0.8;              // partie pointe
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
	  
	  // Pointe (cône)
      const headGeom = new THREE.ConeGeometry(headRadius, headHeight, 16);
      const head = new THREE.Mesh(headGeom, mat);
      head.position.y = (headHeight/ 2);

      head.rotation.z = Math.PI;

      // Tige de la flèche (cylindre)
      const shaftHeight = height - headHeight;
      const shaftRadius = headRadius * 0.25;

      const shaftGeom = new THREE.CylinderGeometry(shaftRadius, shaftRadius, shaftHeight, 16);
      const shaft = new THREE.Mesh(shaftGeom, mat);

      shaft.position.y = headHeight + (shaftHeight/ 2);
	  
	    group.add(shaft);
      group.add(head);

      return group;
      }

      default:
        console.warn('Type de contenu AR inconnu :', desc.type);
        return null;

    }
}


// Engine pour l'AR
export async function AREngine(input) {
  if (!locar || !scene) {
    console.warn('LocAR ou scene non initialisés');
    return;
  }

  /*console.log('AREngine reçu =', input);*/

  hideAllARElements();

  const mesh = await createMesh(input);

  if (!mesh) {console.warn('createMesh a renvoyé null pour', input);
    return;
  }

  if (typeof input.lon !== 'number' || typeof input.lat !== 'number') {
    console.warn('input.lon / input.lat invalides pour', input);
    return;
  }

  locar.add(mesh, input.lon, input.lat, -EYE_HEIGHT);

  // Rapprocher le modèle du sol (déduire la hauteur des yeux)
  //mesh.position.y -= EYE_HEIGHT;

  elementsActuels = [mesh];

  /*console.log('elementsActuels après AREngine =', elementsActuels);*/
}


// Fonction d'initialisation de l'AR
export function initAREngine(canvas) {
  /*console.log('INIT AR SCRIPT');*/

  // Constantes AR
  renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true});
  camera = new THREE.PerspectiveCamera(80,(canvas.clientWidth || 1) / (canvas.clientHeight || 1),0.001,1000);
  scene = new THREE.Scene();

  // LocAR
  locar = new LocAR.LocationBased(scene, camera);
  window.locar = locar;

  // --- LERP camera smoothing state ---
  const cameraTarget = new THREE.Vector3();
  const cameraSmoothed = new THREE.Vector3();
  let hasCameraTarget = false;

  // réglages LERP
  const LERP_ALPHA = 0.01;
  const SNAP_DIST  = 8;

  // Camera
  const cam = new LocAR.Webcam({ video: { facingMode: 'environment' }, audio: false },null);
  cam.on('webcamstarted', ev => {scene.background = ev.texture;/*console.log('Webcam started')*/;});
  cam.on('webcamerror', err =>alert(`Webcam error: code ${err.code} message ${err.message}`));

  deviceOrientationControls = new LocAR.DeviceOrientationControls(camera);
  deviceOrientationControls.on('deviceorientationgranted', ev => {
    ev.target.connect();
    /*console.log('Device motion granted')*/;
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
    /*locar.on('gpsupdate', ev => {
      if (!firstFixResolved) {
        firstFixResolved = true
        console.log('Premier fix GPS obtenu')
        resolve(ev)
      }
    })*/
    locar.on('gpsupdate', ev => {
      // --- LERP: LocAR vient de mettre camera.position au GPS brut ---
      if (!hasCameraTarget) {
        cameraTarget.copy(camera.position);
        cameraSmoothed.copy(camera.position);
        hasCameraTarget = true;
      } else {
        // 1) On enregistre la nouvelle cible (brute)
        cameraTarget.copy(camera.position);
        // 2) On restaure la position lissée pour éviter le saut instantané
        camera.position.copy(cameraSmoothed);
      }

      // --- Premier fix ---
      if (!firstFixResolved) {
        firstFixResolved = true
        /*console.log('Premier fix GPS obtenu')*/
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

  /*console.log('Calling locar.startGps()');*/
  locar.startGps();

  let animating = true
  function animate() {
    if (!animating) return
    requestAnimationFrame(animate)
    deviceOrientationControls.update?.()
    if (hasCameraTarget) {
      smoothLerpPosition(camera.position, cameraTarget, LERP_ALPHA, SNAP_DIST);
      cameraSmoothed.copy(camera.position);
    }
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
    async showModel() {
      await firstFixPromise
      AREngine(contenuAR.model)
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

export function smoothLerpPosition(
  current,
  target,
  alpha = 0.08,
  snapDistance = 10
) {
  if (!current || !target) return;

  const dist = current.distanceTo(target);

  if (dist > snapDistance) {
    current.copy(target);
    return;
  }

  current.lerp(target, alpha);
}
