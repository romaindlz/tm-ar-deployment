-- schema.sql
CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ts_ms INTEGER NOT NULL,
    ts_human TEXT NOT NULL,
    session_id TEXT NOT NULL,
    event TEXT NOT NULL,
    payload TEXT
);

CREATE INDEX IF NOT EXISTS idx_events_session
ON events (session_id);

CREATE INDEX IF NOT EXISTS idx_events_time
ON events (ts_ms);
