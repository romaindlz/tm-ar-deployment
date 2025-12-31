#!/usr/bin/python3
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
import sqlite3, json, time, os

HOST = "127.0.0.1"
PORT = 8000
DB_FILE = "telemetry.sqlite"

def init_db():
    first = not os.path.exists(DB_FILE)
    conn = sqlite3.connect(DB_FILE)
    if first:
        with open("schema.sql", "r", encoding="utf-8") as f:
            conn.executescript(f.read())
        conn.commit()
    return conn

conn = init_db()

class TelemetryServer(BaseHTTPRequestHandler):

    def _set_headers(self, status=200):
        self.send_response(status)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS, POST")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers(200)

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path != "/api/events":
            self._set_headers(404)
            self.wfile.write(b'{"ok":false}')
            return

        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length)

        try:
            data = json.loads(raw.decode("utf-8"))
        except Exception:
            self._set_headers(400)
            self.wfile.write(b'{"ok":false,"error":"invalid_json"}')
            return

        ts_ms = int(data.get("ts_ms", time.time() * 1000))
        ts_human = str(data.get("ts_human", "unknown"))
        session_id = str(data.get("session_id", "unknown"))
        event = str(data.get("event", "unknown"))
        payload = json.dumps(data.get("payload", {}), ensure_ascii=False)

        cur = conn.cursor()
        cur.execute(
            "INSERT INTO events (ts_ms, ts_human, session_id, event, payload) VALUES (?, ?, ?, ?, ?)",
            (ts_ms, ts_human, session_id, event, payload)
        )
        conn.commit()

        self._set_headers(201)
        self.wfile.write(b'{"ok":true}')

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path != "/api/events":
            self._set_headers(404)
            self.wfile.write(b'{"ok":false}')
            return

        qs = parse_qs(parsed.query)
        session_id = (qs.get("session_id") or [None])[0]
        limit = int((qs.get("limit") or [50])[0])

        if not session_id:
            self._set_headers(400)
            self.wfile.write(b'{"ok":false,"error":"missing session_id"}')
            return

        cur = conn.cursor()
        cur.execute(
            "SELECT ts_ms, ts_human, event, payload FROM events WHERE session_id=? ORDER BY ts_ms LIMIT ?",
            (session_id, limit)
        )
        rows = cur.fetchall()

        out = [
            {"ts_ms": r[0], "ts_human": r[1], "event": r[2], "payload": json.loads(r[3])}
            for r in rows
        ]

        self._set_headers(200)
        self.wfile.write(json.dumps(out).encode("utf-8"))

if __name__ == "__main__":
    server = HTTPServer((HOST, PORT), TelemetryServer)
    print(f"SQLite Telemetry Server running on http://{HOST}:{PORT}")
    server.serve_forever()
