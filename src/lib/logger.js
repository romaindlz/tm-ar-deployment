// logger.js (web only, IndexedDB + export JSON snapshots) — version simplifiée

const DB_NAME = "tmCalibrationDB";
const DB_VERSION = 1;
const STORE_NAME = "docs";
const DOC_KEY = "calibration-history-v1";

/** ---------- IndexedDB core ---------- **/
function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function readDoc() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(DOC_KEY);

    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
  });
}

async function writeDoc(doc) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const req = store.put(doc, DOC_KEY);

    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
  });
}

/** ---------- Document structure ---------- **/
export function ensureCalibrationDocument(doc) {
  const out = (doc && typeof doc === "object") ? doc : {};
  if (out.schemaVersion == null) out.schemaVersion = 1;
  if (!Array.isArray(out.calibrations)) out.calibrations = [];
  return out;
}

function makeId(prefix = "cal") {
  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const rnd = Math.random().toString(16).slice(2, 8);
  return `${prefix}-${ts}-${rnd}`;
}

/** ---------- Mapping: ton res -> objet minimal ---------- **/
export function buildResultsFromCalibrationResult(res) {
  return {
    avgDeltaDeg: {
      dLat: res?.avgDeltaDeg?.dLat ?? null,
      dLon: res?.avgDeltaDeg?.dLon ?? null,
    },
    dHaversine: res?.dHaversine ?? null,
    avgAltitude: res?.avgAltitude ?? null,
    stats: {
      samplesTotal: res?.stats?.samplesTotal ?? null,
      samplesUsed: res?.stats?.samplesUsed ?? null,
      zThreshold: res?.stats?.zThreshold ?? null,

      latMeasuredMean: res?.stats?.latMeasuredMean ?? null,
      lonMeasuredMean: res?.stats?.lonMeasuredMean ?? null,

      latResidualStdDeg: res?.stats?.latResidualStdDeg ?? null,
      lonResidualStdDeg: res?.stats?.lonResidualStdDeg ?? null,

      altitudesInliersCount: res?.stats?.altitudesInliersCount ?? null,
      altitudeMean: res?.stats?.altitudeMean ?? null,
      altitudeStd: res?.stats?.altitudeStd ?? null,
    },
    units: {
      deltaLatLon: "degrees",
      haversine: "meters",
      altitude: "meters",
    }
  };
}

/**
 * Ajoute une calibration (entrée minimale).
 */
export async function logCalibration({
  res,
  pointName,
  lonKnown,
  latKnown,
  sessionId = null
}) {
  if (!res) throw new Error("logCalibration: 'res' est requis.");
  if (!pointName) throw new Error("logCalibration: 'pointName' est requis.");

  const doc = ensureCalibrationDocument(await readDoc());

  const record = {
    id: makeId("cal"),
    createdAt: new Date().toISOString(),
    sessionId,
    pointName,
    known: { lon: lonKnown, lat: latKnown },
    results: buildResultsFromCalibrationResult(res),
  };

  doc.calibrations.push(record);
  await writeDoc(doc);

  return record;
}

export async function readCalibrationHistory() {
  return ensureCalibrationDocument(await readDoc());
}

export async function getCalibrations() {
  const doc = await readCalibrationHistory();
  return doc.calibrations;
}

function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

/**
 * Export complet
 */
export async function exportCalibrationHistory({ filenamePrefix = "calibration-history", sessionId = null } = {}) {
  const doc = await readCalibrationHistory();
  const ts = new Date().toISOString().slice(0, 19).replace(/[:]/g, "-");
  const sid = sessionId ? `-${sessionId}` : "";
  const filename = `${filenamePrefix}${sid}-${ts}.json`;
  downloadJson(doc, filename);
  return filename;
}


