import { logEvent } from "./CRUD.js";
import { stopAndSendGpsTracking } from "./gpsTracking.js";

export async function endSession() {
  try {
    await logEvent("session_end", {});
  } catch (e) {
  }

  try {
    const n = await stopAndSendGpsTracking();
    console.log("Fin session : points GPS envoyés =", n);
  } catch (e) {
    console.warn("Fin session : envoi gps_track échoué", e);
  }

  alert("Session terminée. Merci !");
}
