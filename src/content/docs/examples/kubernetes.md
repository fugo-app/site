---
title: Kubernetes Agent
description: Configuration Fugo agent for Kubernetes or Podman
---

## Podman and Kubernetes Logs

Configuration for Podman log `/etc/fugo/agents/podman.yaml`:

```yaml
fields:
  - name: time
    timestamp:
      format: rfc3339nano
  - name: app
  - name: stream
  - name: message
file:
  path: '/var/log/podman/(?P<app>\w+)\.log'
  format: plain
  regex: '^(?P<time>[^ ]+) (?P<stream>[^ ]+) [FP] (?P<message>.*)'
  rotate:
    method: truncate
    size: 10mb
retention:
  period: 3d
  interval: 1h
```
