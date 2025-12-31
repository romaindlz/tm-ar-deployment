import { logCalibration } from "./logger.js";
import { getPosition } from './getPosition.js';
import { getHelmert2DParam, applyHelmert }  from './transformation.js';
import { COORDS } from '../constants/CoordsPts.js'
import { logEvent } from "./CRUD.js";
import { getSessionId } from "./sessionId.js";

/* ────────────────── Calibration GPS ────────────────── */
//Uvrier
// Coordonnées des points fixes (calibration)
const latPF1 = COORDS.latPF1;
const lonPF1 = COORDS.lonPF1;

const latPF2 = COORDS.latPF2;
const lonPF2 = COORDS.lonPF2;

function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

function haversineDistance(latKnown, lonKnown, latMean, lonMean) {
  const r = 6371000; // rayon moyen Terre en mètres

  const dlongitude = degToRad(lonKnown - lonMean);
  const dlatitude  = degToRad(latKnown - latMean);

  const a =
    Math.sin(dlatitude / 2) * Math.sin(dlatitude / 2) +
    Math.cos(degToRad(latMean)) *
      Math.cos(degToRad(latKnown)) *
      (Math.sin(dlongitude / 2) * Math.sin(dlongitude / 2));

  const angle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return angle * r;
}

function mean(arr) {
  return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
}

function std(arr) {
  const m = mean(arr);
  const v = arr.length ? arr.reduce((a, b) => a + (b - m) ** 2, 0) / arr.length : 0;
  return Math.sqrt(v);
}


/* ───────── Calibration avec getPosition() + filtrage outliers ───────── */
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

//https://statisticsbyjim.com/basics/outliers/
/** Filtrage outliers 2D par z-score sur lat et lon (garde si |z|<=thr pour les deux) */
function filterOutliers2D(points, zThreshold = 2.5) {
  if (!points.length) return [];

  const lats = points.map(p => p.lat);
  const lons = points.map(p => p.lon);
  const mLat = mean(lats), sLat = std(lats);
  const mLon = mean(lons), sLon = std(lons);

  // si pas de dispersion, rien à filtrer
  if (sLat === 0 && sLon === 0) return points.slice();

  return points.filter(p => {
    const zLat = sLat === 0 ? 0 : Math.abs((p.lat - mLat) / sLat);
    const zLon = sLon === 0 ? 0 : Math.abs((p.lon - mLon) / sLon);
    return zLat <= zThreshold && zLon <= zThreshold;
  });
}

/**
 * Calibre via getPosition() en bouclant pendant >= minDurationMs et >= minSamples.
 */
async function calibrateGps(lonKnown, latKnown, { onStart, onEnd } = {}) {
  const minDurationMs   = 5000;
  const minSamples      = 10;
  const sampleIntervalMs= 500;
  const zThreshold      = 2.5;

  onStart?.(); //signal de début pour le spinner

  const start = Date.now();
  const samples = [];


  try {
    // si tu as un service GPS interne
    try { window?.locar?.stopGps?.(); } catch(e) {}

    // Échantillonnage en boucle avec getPosition()
    while ((Date.now() - start) < minDurationMs || samples.length < minSamples) {
      try {
        console.log(Date.now() - start)
        const res = await getPosition();

        const lat = res?.coords?.latitude;
        const lon = res?.coords?.longitude;
        const h = res?.coords?.altitude;
        console.log('getPosition result:', lat, lon);

        if (res?.ok && lat != null && lon != null && h != null) {
          samples.push({ lat: lat, lon: lon, h: h });
          console.log(`lat: ${lat}, lon: ${lon}, h: ${h}`);
        }
      } catch (e) {
        // on ignore cet échantillon
      }
      await sleep(sampleIntervalMs);
    }

    if (!samples.length) {
      throw new Error("Aucun échantillon reçu pendant la calibration.");
    }

    // Filtrage outliers 2D (z-score sur lat et lon)
    const filtered = filterOutliers2D(samples, zThreshold);
    const removed = samples.length - filtered.length;

    const latMean = mean(filtered.map(p => p.lat));
    const lonMean = mean(filtered.map(p => p.lon));
    const altitudesInliers = filtered.map(p => p.h).filter(h => h != null);

    const hMean = mean(altitudesInliers);
    const hStd  = std(altitudesInliers);

    console.log(`h mean (inliers): ${hMean} m, h std: ${hStd} m`);

    // Correction = connu - mesuré
    const dLatDeg = latKnown - latMean;
    const dLonDeg = lonKnown - lonMean;

    // Stats de dispersion (sur résidus post-correction)
    const latResiduals = filtered.map(p => (latKnown - p.lat) - dLatDeg);
    const lonResiduals = filtered.map(p => (lonKnown - p.lon) - dLonDeg);
    const latStdDeg = std(latResiduals);
    const lonStdDeg = std(lonResiduals);

    console.log(`lat std: ${latStdDeg}, lon std: ${lonStdDeg}`);

    // distance Haversine entre moyen mesuré et connu
    const dHaversine = haversineDistance(latKnown, lonKnown, latMean, lonMean)

    console.log(`delta [m] : ${dHaversine}`);
    console.log(`Calibration: ${samples.length} échantillons (−${removed} outliers, thr=${zThreshold})`);

    return {
      avgDeltaDeg: { dLat: dLatDeg, dLon: dLonDeg },
      dHaversine,
      avgAltitude: hMean,
      stats: {
        samplesTotal: samples.length,
        samplesUsed: filtered.length,
        zThreshold,
        latMeasuredMean: latMean,
        lonMeasuredMean: lonMean,
        latResidualStdDeg: latStdDeg,
        lonResidualStdDeg: lonStdDeg,
        altitudesInliersCount: altitudesInliers.length,
        altitudeMean: hMean,
        altitudeStd: hStd,
      },
    };

  } finally {
    onEnd?.(); //signal de fin pour le spinner
  }

}


export let calibrationReady = false;

export function markCalibrationDone() {
  calibrationReady = true;
}


// ────────────────── Bouton de calibration ──────────────────
// Création variables
let pf1_source_lon = null;
let pf1_source_lat = null;
let pf1_source_h   = null;

let pf2_source_lon = null;
let pf2_source_lat = null;
let pf2_source_h   = null;

let calibLat = null;
let calibLon = null;

let params   = null;


export async function runCalibrationPoint(pointName, lonKnown, latKnown, options={}) {

  const { onStart, onEnd, sessionId = null } = options;
  
  console.log(`Calibration ${pointName} démarrée`);
  alert(`Calibration sur ${pointName} en cours… Restez immobile ~5 s.`);


  try {
    const res = await calibrateGps(lonKnown, latKnown, { onStart, onEnd });

    // mise à jour des offsets globaux
    calibLat = res.avgDeltaDeg.dLat;
    calibLon = res.avgDeltaDeg.dLon;

    // valeurs mesurées
    if (pointName === 'Point 1') {
      pf1_source_lon = res.stats.lonMeasuredMean;
      pf1_source_lat = res.stats.latMeasuredMean;
      pf1_source_h   = res.avgAltitude;
    } else if (pointName === 'Point 2') {
      pf2_source_lon = res.stats.lonMeasuredMean;
      pf2_source_lat = res.stats.latMeasuredMean;
      pf2_source_h   = res.avgAltitude;
    }

    const meters = `≈ distance [m] ${res.dHaversine.toFixed(2)}`;
    const degs   = `Δlat ${calibLat.toFixed(8)}°, Δlon ${calibLon.toFixed(8)}°`;
    const spread = `σ: lat ${res.stats.latResidualStdDeg.toExponential(2)}°, lon ${res.stats.lonResidualStdDeg.toExponential(2)}°  | utilisés: ${res.stats.samplesUsed}/${res.stats.samplesTotal}`;

    console.log(`Calibration sur ${pointName} OK\n${degs}\n${meters}\n${spread}`);
    alert(`Calibration sur ${pointName} OK.\n${meters}`);

    //Permet d'activer, ou non, le fakeGPS
    if (pointName === 'Point 2') {
      markCalibrationDone();
    }

    // --- Logger ---
    try {
      await logCalibration("Calibration_Point", {
        point: pointName,
        lonKnown,
        latKnown,
        avgDeltaDeg: res.avgDeltaDeg,
        dHaversine: res.dHaversine,
        stats: res.stats
      }, sessionId);
    } catch (e) {
      console.warn("Logger calibration failed:", e);
    }

    logEvent("calibration_done", {
      pointName: pointName,
      samplesUsed: res.stats.samplesUsed,
      meanDelta: res.dHaversine,
      stdLat: res.stats.latResidualStdDeg,
      stdLon: res.stats.lonResidualStdDeg
    })


    return res;

  } catch (e) {
    console.log(`Calibration ${pointName} échouée: ${e?.message || e}`);
    alert(`Calibration échouée: ${e?.message || e}`);
    throw e;
  }
}


const FAKE_GPS_INTERVAL = 1000; // en ms
let fakeGpsLoopActive = false;
let fakeGpsIntervalId = null;

export async function startLiveCorrectedFakeGps() {

  if (
    pf1_source_lon == null || pf1_source_lat == null ||
    pf2_source_lon == null || pf2_source_lat == null
  ) {
    alert("Impossible de démarrer la Fake GPS.\nVeuillez d'abord calibrer les points 1 et 2.");
    console.log("Fake GPS bloquée : calibration PF1 et PF2 incomplète.");
    return;
  }

  let source1 = { lon: pf1_source_lon, lat: pf1_source_lat, h: pf1_source_h };
  let target1 = { lon: lonPF1,        lat: latPF1,        h: pf1_source_h };

  let source2 = { lon: pf2_source_lon, lat: pf2_source_lat, h: pf2_source_h };
  let target2 = { lon: lonPF2,        lat: latPF2,        h: pf2_source_h };

  try {
    params = getHelmert2DParam(source1, source2, target1, target2);
    console.log("Paramètres Helmert calculés avec succès.");
  } catch (err) {
    alert("Erreur lors du calcul Helmert : " + (err.message || err));
    console.log("Calcul Helmert échoué : " + (err.message || err));
    return;
  }

  // --- Logger ---
    try {
      await logCalibration("Helmert_params", {
        tx: params.tx,
        ty: params.ty,
        k: params.k,
        thetaRad: params.thetaRad,
        deltaLon: params.deltaLon
      }, getSessionId());
    } catch (e) {
      console.warn("Logger calibration failed:", e);
    }

  logEvent("Helmert_param", {
    tx: params.tx,
    ty: params.ty,
    k: params.k,
    thetaRad: params.thetaRad,
    deltaLon: params.deltaLon
  })

  // coupe toute boucle existante
  if (fakeGpsIntervalId) clearInterval(fakeGpsIntervalId);
  fakeGpsLoopActive = false;

  // on arrête le provider interne LocAR avant de simuler
  try { window?.locar?.stopGps?.(); } catch {}

  // test initial (et injection immédiate)
  let res;
  try { res = await getPosition(); }
  catch (e) { console.log(`getPosition exception: ${e?.message || e}`);
    return;
  }

  if (!res?.ok || !res.coords) {
    console.log(`getPosition a échoué: ${res?.error?.code || 'UNKNOWN'}`);
    return;
  }


  console.log(res)
  console.log(res.coords.latitude)
  console.log(res.coords.longitude)
  console.log(res.coords.altitude)
  console.log(params)
  // première injection (instantanée) pour éviter un "trou" visuel
  try {
    const first = applyHelmert(res.coords.latitude, res.coords.longitude, res.coords.altitude, params);
    console.log(first)
    window?.locar?.fakeGps?.(first.lon_transfo, first.lat_transfo);
    console.log(`Fake GPS LIVE démarrée (lon: ${first.lon_transfo.toFixed(6)}, lat: ${first.lat_transfo.toFixed(6)})`);
  } catch (e) {
    console.log(`Impossible d'initialiser la fake GPS : ${e.message || e}`);
  }

  // boucle LIVE
  fakeGpsLoopActive = true;
  fakeGpsIntervalId = setInterval(async () => {
    if (!fakeGpsLoopActive) return;
    try {
      const r = await getPosition();
      if (!r?.ok || !r.coords) return;

      const corrected = applyHelmert(r.coords.latitude, r.coords.longitude, r.coords.altitude, params);
      window?.locar?.fakeGps?.(corrected.lon_transfo, corrected.lat_transfo);

      console.log(`Fake GPS LIVE → lon: ${corrected.lon_transfo.toFixed(6)}, lat: ${corrected.lat_transfo.toFixed(6)}`);
    } catch (err) {
      console.log(`Erreur tick fake GPS: ${err?.message || err}`);
    }
  }, FAKE_GPS_INTERVAL);
}