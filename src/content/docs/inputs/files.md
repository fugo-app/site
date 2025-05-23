---
title: File-based Input
description: Tail you logs from a file or directory
---

File-based input allows you to read logs from a file or a directory. It supports log rotation and can handle multiple files using regex patterns.

## Configuration

File-based input has the following configuration:

- `path`: Path to the log file or regex pattern to match multiple files.
- `format`: The format of the log file. Supported formats are `plain` and `json`.
- `regex`: A regex pattern to match the plain log lines.
- `rotate`: Configuration for log rotation

Example agent configuration for file-based input:

```yaml
fields:
  - name: time
    timestamp:
      format: common
  - name: level
  - name: message

file:
  path: '/var/log/example.log'
  format: plain
  regex: '^(?P<time>[^ ]+) (?P<level>[^ ]+) (?P<message>.*)$'
  rotate:
    method: truncate
    size: 10mb

retention:
  period: 3d
  interval: 1h
```

## Path

The `path` can be a single file:

```yaml
path: '/var/log/nginx/error.log'
```

Or a regex pattern to match multiple files:

```yaml
path: '/var/log/nginx/access_(?P<host>.*)\.log'
```

A named capture group should be in the file name only and can be used in the structured output.

## Regex

The `regex` option is used to match the log lines in a plain text file. It can be used to extract fields from the log line and convert it to structured data.

## Rotation

Cleanup the log file when it reaches a certain size.

The `rotate` configuration has the following options:

- `method`: The method to use for log rotation. Supported methods:
  - `truncate`: Truncate the log file to zero size.
  - `rename`: Rename the log file and create a new one. The old file will be removed.
- `size`: The maximum size of the log file before rotation. It can be specified in bytes, kilobytes (kb) or megabytes (mb).
- `run`: The command to run after rotation. It can be a shell command or a script. This option required if `method` is `rename`.

Logs rotated with third-party tools like `logrotate` are supported too. Fugo will detect the new file and start reading it without any additional configuration.
