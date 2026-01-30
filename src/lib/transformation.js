
// Paramètres de l'ellipsoïde GRS80
let a = 6378137.000
let f = 1/298.257222101
let b = a-a*f
let e = (Math.sqrt(a*a-b*b))/a


// ───────────── Transformation de similitude 2D ─────────────
// "P:\HEIG-VD\3eme_semestre\Géodésie\02_Systemes_de_projection\libGeod_20211118.py"
function ell2cart(lon_deg,lat_deg,h) {

  const lon = lon_deg*Math.PI/180.0
  const lat = lat_deg*Math.PI/180.0
    
  const RN = a/Math.sqrt(1-e**2*Math.sin(lat)**2)
  const x = (RN+h) * Math.cos(lat) * Math.cos(lon)
  const y = (RN+h) * Math.cos(lat) * Math.sin(lon)
  const z = (RN*(1-e**2)+h) * Math.sin(lat)

  return {x,y,z};
}

// "P:\HEIG-VD\3eme_semestre\Géodésie\02_Systemes_de_projection\libGeod_20211118.py"
function cart2ell(x,y,z) {

    let lon = Math.atan2(y, x);

    let hi = 0;
    let hi_1 = 1;
    let RNi = 1;
    let lat = 0;

    while (Math.abs(hi - hi_1) > 0.000001) {
        hi_1 = hi;
        lat = Math.atan2(
            z,
            Math.sqrt(x * x + y * y) * (1 - (RNi / (RNi + hi)) * e * e)
        );
        RNi = a / Math.sqrt(1 - e * e * Math.sin(lat) * Math.sin(lat));
        hi = Math.sqrt(x * x + y * y) / Math.cos(lat) - RNi;
    }

    let lat_transfo = lat * 180 / Math.PI;
    let lon_transfo = lon * 180 / Math.PI;
    let h_transfo = hi;

    return { lat_transfo, lon_transfo, h_transfo };
}


/**
 * Calcule les paramètres d'une transformation de similitude 2D
 * à partir de deux points de contrôle (source -> target).
 */
export function getTransform2dParams(src1, src2, tgt1, tgt2) {

    const S1 = ell2cart(src1.lon, src1.lat, src1.h);
    const S2 = ell2cart(src2.lon, src2.lat, src2.h);

    const T1 = ell2cart(tgt1.lon, tgt1.lat, tgt1.h);
    const T2 = ell2cart(tgt2.lon, tgt2.lat, tgt2.h);

    const { x: x1, y: y1 } = S1;
    const { x: x2, y: y2 } = S2;

    const { x: X1, y: Y1 } = T1;
    const { x: X2, y: Y2 } = T2;

    // Différences source
    const dx = x2 - x1;
    const dy = y2 - y1;

    // Différences cible
    const dX = X2 - X1;
    const dY = Y2 - Y1;

    // Facteur d'échelle k
    const distTarget = Math.hypot(dX, dY);
    const distSource = Math.hypot(dx, dy);
    const k = distTarget / distSource;

    // Angles de direction
    const angleSource = Math.atan2(dy, dx);
    const angleTarget = Math.atan2(dY, dX);

    // Rotation
    const thetaRad = angleTarget - angleSource;

    const cosT = Math.cos(thetaRad);
    const sinT = Math.sin(thetaRad);

    // Translation
    const tx = X1 - k * (cosT * x1 - sinT * y1);
    const ty = Y1 - k * (sinT * x1 + cosT * y1);

    return {
        tx,
        ty,
        k,
        thetaRad
    };
}

// Fonction transformation similitude
function transfo2D(tx, ty, x_source,y_source,k,theta) {

  const a = k * Math.cos(theta);
  const b = k * Math.sin(theta);

  const x_transfo = tx + a * x_source - b * y_source;
  const y_transfo = ty + b * x_source + a * y_source;

  return { x_transfo, y_transfo };
}


// Applicquer la transformation
export function applyTransform(lat, lon, h, params) {
  
  const {x,y,z} = ell2cart(lon, lat, h);
  const { tx,ty,k,thetaRad } = params
  const {x_transfo, y_transfo} = transfo2D(tx, ty, x, y, k, thetaRad);
  const {lat_transfo, lon_transfo, h_transfo} = cart2ell(x_transfo, y_transfo,z)

  return { lat_transfo, lon_transfo, h_transfo }

}
