---
title: Query
description: API to access your logs
---

Use GET requests to query logs. The API supports filtering and pagination.

```
/api/query/{agent_name}?{query}
```

- `agent_name`: The name of the agent to query logs from.

## Query Parameters

- `limit`: Maximum number of records to return (default is 100).
- `after`: Return records after the specified cursor.
- `before`: Return records before the specified cursor.

## Query Filters for numeric fields

- `{field_name}__eq`: Exact match
- `{field_name}__ne`: Not equal
- `{field_name}__gt`: Greater than
- `{field_name}__gte`: Greater than or equal to
- `{field_name}__lt`: Less than
- `{field_name}__lte`: Less than or equal to

## Query Filters for string fields

- `{field_name}__exact`: Exact match
- `{field_name}__like`: Partial match (case-insensitive)
- `{field_name}__prefix`: Starts with (case-insensitive)
- `{field_name}__suffix`: Ends with (case-insensitive)

## Query Filters for time fields

- `{field_name}__since`: Return records since the specified time
- `{field_name}__until`: Return records until the specified time

Supported formats:

- "2006-01-02T15:04:05": date and time format
- "2006-01-02": date only format
- "5d": relative time (now minus 5 days), supported units are `s`, `m`, `h`, `d`

## Curl

For example to get last 10 records from the nginx access log, with status not equal to 200:

```bash
curl -G http://127.0.0.1:2111/api/query/nginx-access \
     --data-urlencode "limit=10" \
     --data-urlencode "status__ne=200"
```

## Response Format

The response is in JSON Lines format.
Each line has a `_cursor` field. And fields defined in the agent configuration.

```json
{"_cursor":"0000000000000cb1","time":1744321776000,"status":200,"message":"GET /"}
{"_cursor":"0000000000000cb2","time":1744321777000,"status":200,"message":"GET /favicon.ico"}
{"_cursor":"0000000000000cb3","time":1744321778000,"status":404,"message":"GET /not-found"}
```
