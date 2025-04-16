---
title: Nginx Agent
description: Fugo agent configuration for collecting Nginx logs
---

## Access Log

Nginx configuration to write logs in JSON format:

```nginx
http {
    log_format json escape=json '{'
                                '"time":"$msec",'
                                '"host":"$host",'
                                '"ip":"$remote_addr",'
                                '"method":"$request_method",'
                                '"uri":"$request_uri",'
                                '"status": "$status"'
                                '}';

    access_log /var/log/nginx/access.log json;
}
```

Configuration for nginx access log `/etc/fugo/agents/nginx-access.yaml`:

```yaml
fields:
  - name: time
    timestamp:
      format: unix
  - name: host
  - name: ip
  - name: method
  - name: uri
  - name: status
    type: int
file:
  path: /var/log/nginx/access.log
  format: json
  rotate:
    method: truncate
    size: 1mb
retention:
  period: 7d
  interval: 1h
```

## Nginx Error Log

Configuration for nginx error log `/etc/fugo/agents/nginx-error.yaml`:

```yaml
fields:
  - name: time
    timestamp:
      format: '2006/01/02 15:04:05'
  - name: level
  - name: message
file:
  path: /var/log/nginx/error.log
  format: plain
  regex: '^(?P<time>[^ ]+ [^ ]+) \[(?P<level>[^\]]+)\] \d+#\d+: (?P<message>.*)'
  rotate:
    method: truncate
    size: 1mb
retention:
  period: 3d
  interval: 1h
```
