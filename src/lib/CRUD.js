import { getSessionId } from "./sessionId.js";
import { timestamp } from './gpsTracking.js';

export async function logEvent(event, payload = {}) {
  try {
    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ts_ms: Date.now(),
        ts_human: timestamp(),
        session_id: getSessionId(),
        event,
        payload
      })
    });
  } catch (e) {
    console.warn("logEvent failed:", event, e);
  }
}