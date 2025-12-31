const DB_NAME = "tmCalibrationDB";
const DB_VERSION = 1;
const STORE_NAME = "docs";
const DOC_KEY = "calibration-history-v1";

/* ---------------- IndexedDB ---------------- */

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

async function deleteDoc() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const req = store.delete(DOC_KEY);

    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
  });
}

/* ---------------- Structure document ---------------- */

function ensureDocument(doc) {
  const out = doc && typeof doc === "object" ? doc : {};
  if (out.schemaVersion == null) out.schemaVersion = 1;
  if (!Array.isArray(out.events)) out.events = [];
  return out;
}

function makeId(prefix = "evt") {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`;
}

/* ---------------- Export helper ---------------- */

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


export async function logCalibration(eventType, payload = {}, sessionId = null) {
  if (!eventType) throw new Error("logCalibration: eventType requis.");

  const doc = ensureDocument(await readDoc());
  doc.events.push({
    id: makeId(),
    type: eventType,
    createdAt: new Date().toISOString(),
    sessionId,
    payload,
  });

  await writeDoc(doc);
}

export async function readHistory() {
  return ensureDocument(await readDoc());
}


export async function exportAndResetSession(
  sessionId,
  { filenamePrefix = "calibration-session", resetMode = "all" } = {}
) {
  if (!sessionId) throw new Error("exportAndResetSession: sessionId requis.");

  const doc = await readHistory();
  const sessionEvents = doc.events.filter(e => e.sessionId === sessionId);

  const exported = {
    schemaVersion: doc.schemaVersion,
    sessionId,
    exportedAt: new Date().toISOString(),
    events: sessionEvents,
  };

  const ts = new Date().toISOString().slice(0, 19).replace(/[:]/g, "-");
  const filename = `${filenamePrefix}-${sessionId}-${ts}.json`;
  downloadJson(exported, filename);

  // Reset juste après export
  if (resetMode === "all") {
    await deleteDoc();
  } else {
    const remaining = {
      schemaVersion: doc.schemaVersion,
      events: doc.events.filter(e => e.sessionId !== sessionId),
    };
    await writeDoc(remaining);
  }

  return filename;
}
