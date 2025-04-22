---
title: Schema
description: API to get schema of logs for a specific agent
---

Use `GET` requests to query schema for a specific agent.

```
/api/schema/{agent_name}
```

- `agent_name`: The name of the agent to query schema for.

## Response Format

The response is in JSON format.

```json
{
    "name": "string",
    "schema": [
        {
            "name": "string",
            "type": "string"
        }
    ]
}
```

- `name`: The name of the agent.
- `schema`: A list of fields in the schema.

Schema fields:

- `name`: The name of the field.
- `type`: The type of the field. Possible values are `time`, `string`, `int`, `float`.
