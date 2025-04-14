---
title: Fugo Config
description: Base configuration for Fugo
---

Fugo uses YAML configuration files. The main configuration file is located at `/etc/fugo/config.yaml`.

## Fugo Configuration

```yaml
server:
  listen: 127.0.0.1:2221
  cors:
    origin: "*"

storage:
  sqlite:
    path: /var/lib/fugo/fugo.db

file_input:
  offsets: /var/lib/fugo/offsets.yaml
  limit: 100
```

- `server`: Configuration for the HTTP API server.
- `storage`: Configuration for the log storage backend.
- `file_input`: General configuration for file-based input.

## Server Configuration

- `listen`: The address and port for the HTTP server (e.g., "127.0.0.1:2221" or ":2221").
- `cors`: CORS configuration for the HTTP server. Default is disabled.

## SQLite Configuration

- `path`: Path to the SQLite database file. If the file does not exist, it will be created.
- `journal_mode`: SQLite journal mode. Default is `wal`. Other options are `delete`, `truncate`, `persist`, `memory`, and `off`.
- `synchronous`: SQLite synchronous mode. Default is `normal`. Other options are `full`, `off`, and `extra`.
- `cache_size`: SQLite cache size in pages. Default is `10000` pages. Use negative values for kibibytes.

## File-Based Input Configuration

- `offsets`: Path to the offsets file. This file stores the last read position for each log file.
- `limit`: Maximum number of lines to read when the log file is opened for the first time. Default is `100`. Set to `0` for no limit.
