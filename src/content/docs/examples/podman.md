---
title: Podman Agent
description: Fugo agent configuration for collecting Podman or Kubernetes logs
---

[Podman](https://podman.io/) is a container management tool.

## Podman Configuration

Podman supports Kubernetes formatted logs. To enable this, you need to set the log driver to `k8s-file` and specify the log file path:

```bash
podman run \
  --log-driver=k8s-file \
  --log-opt=path=/var/log/podman/example.log \
  ...
```

Or starting container with quadlet file:

```ini
[Container]
LogDriver=k8s-file
LogOpt=path=/var/log/podman/example.log
...
```

## Podman Logs

Configuration for Podman logs `/etc/fugo/agents/podman.yaml`:

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
