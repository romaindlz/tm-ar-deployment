import { getSessionId } from "./sessionId.js";
import { getPosition } from "./getPosition.js";

function round(value, decimals) {
  if (value == null) return null;
  const f = Math.pow(10, decimals);
  return Math.round(value * f) / f;
}

let timerId = null;
let points = [];

export function timestamp() {

  const d = new Date();
  const YYYY = d.getFullYear();
  const MM = String(d.getMonth() + 1).padStart(2, "0");
  const DD = String(d.getDate()).padStart(2, "0");
  const HH = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");

  return `${YYYY}${MM}${DD}${HH}${mm}${ss}`;
}

export function startGpsTracking({ intervalMs = 5000 } = {}) {
  points = [];

  timerId = setInterval(async () => {
    try {
      const res = await getPosition();
      if (!res?.ok || !res.coords) return;

      points.push({
        ts_ms: Number(res.timestamp ?? Date.now()),
        ts_human : timestamp(),
        lat: round(res.coords.latitude, 5),
        lon: round(res.coords.longitude, 5),
        accuracy_m: round(res.accuracy, 3),
        source: res.source,
        platform: res.platform
      });
    } catch (e) {
      console.warn("GPS tracking error", e);
    }
  }, intervalMs);
}


export async function stopAndSendGpsTracking() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  const payload = {
    ts_ms: Date.now(),
    ts_human : timestamp(),
    session_id: getSessionId(),
    event: "gps_track",
    payload: {
      pointsCount: points.length,
      interval_s: 5,
      points
    }
  };

  try {
    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (e) {
    console.warn("Failed to send gps_track", e);
  }

  return points.length;
}
