import { timestamp } from './gpsTracking.js';

const KEY = "tm_session_id_human_v1";

function generateSessionId() {
  return `session_id_${timestamp()}`;
}

export function getSessionId() {
  let sid = sessionStorage.getItem(KEY);
  if (!sid) {
    sid = generateSessionId();
    sessionStorage.setItem(KEY, sid);
  }
  return sid;
}


