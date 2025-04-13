---
title: Pagination
description: Cursor-based pagination for log data
---

Fugo's API uses cursor-based pagination to navigate through large sets of log data.

## How Cursor Pagination Works

Each record in the response contains a unique `_cursor` field that serves as a pointer to that record's position in the dataset. You can use these cursor values with the `before` and `after` parameters to paginate through results.

## Pagination Parameters

- `limit`: Maximum number of records to return per request (default is 100)
- `after`: Return records that come *after* the specified cursor value
- `before`: Return records that come *before* the specified cursor value

In the response, the record corresponding to the provided `_cursor` value is excluded from the results.

## Requesting Recent Records

1. Make an initial request to get the first page with recent records:

```bash
curl -G http://127.0.0.1:2221/api/query/example \
     --data-urlencode "limit=10"
```

2. From the response, note the `_cursor` value of the last record:

```json
{"_cursor":"0000000000000cb0","time":1744321775000}
{"_cursor":"0000000000000cb1","time":1744321776000}
{"_cursor":"0000000000000cb2","time":1744321777000}
```

3. Use that cursor in your next request with the `after` parameter to get the next page:

```bash
curl -G https://example.com/api/query/nginx-access \
     --data-urlencode "limit=10" \
     --data-urlencode "after=0000000000000cb2"
```

New records will be returned, starting from the cursor value you provided.

## Navigating Backward

If you need to navigate backward through results:

1. Save the `_cursor` value of the first record in your current results.
2. Use that cursor in a request with the `before` parameter:

```bash
curl -G https://example.com/api/query/nginx-access \
     --data-urlencode "limit=10" \
     --data-urlencode "before=0000000000000cb0"
```

## Combining with Filters

You can combine pagination parameters with other query filters:

```bash
curl -G https://example.com/api/query/nginx-access \
     --data-urlencode "limit=10" \
     --data-urlencode "after=0000000000000cb2" \
     --data-urlencode "status__ne=200"
```
