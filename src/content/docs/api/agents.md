---
title: Agents
description: API to list available agents
---

Use `GET` requests to query agent names.

```
/api/agents
```

## Response Format

The response is in JSON format.

```json
{
    "agents": ["system", "nginx-access", "nginx-error"]
}
```
