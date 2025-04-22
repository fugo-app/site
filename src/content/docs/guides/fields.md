---
title: Fields
description: Fields define the structure of log records and are used to create the corresponding table in the database.
---

Fields define the structure of log records and are used to create the corresponding table in the database. When the structure changes, the system automatically performs a database migration.

## Fields Configuration

Each field can be defined with the following parameters:

- `name`: The name of the field in the output
- `source`: The source field to extract data (defaults to the field name)
- `type`: The type of the field
- `template`: A Go template to transform source fields into the new field
- `timestamp`: Configuration for timestamp parsing

## Field Types

Field types used to convert the source field to the desired type. The following types are supported:

- `time`: Date and time type (default for field with configured timestamp)
- `string`: String type (default)
- `int`: Integer type (64-bit signed integer)
- `float`: Floating-point type (64-bit IEEE 754)

## Templates

Templates are used to transform the source field into the new field.

## Timestamp Configuration

```yaml
fields:
  - name: time
    timestamp:
      format: rfc3339nano
```

- `format`: Format for the time field

Timestamp Formats:

- `rfc3339`: Format used in structured logs and JSON `2006-01-02T15:04:05Z07:00`
- `rfc3339nano`: High precision format with nanoseconds: `2006-01-02T15:04:05.999999999Z07:00` (Podman, Docker, Kubernetes)
- `common`: Web server log format: `02/Jan/2006:15:04:05 -0700` (Nginx, Apache)
- `stamp`: Stamp format: `Jan _2 15:04:05` (System logs)
- `unix`: Unix timestamp in seconds, optionally with fractional part for milliseconds: `1617715200.123`
- Use any valid Go time format string for custom logs, e.g. `02 Jan 2006 15:04:05`
