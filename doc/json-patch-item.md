# JSON Patch item

**Schema:** [json-patch-item.schema.json](../src/json-patch-item.schema.json)

This schema defines a JSON Patch object, which is used to apply partial updates to resources in HTTP APIs.

## Valid examples

```json
{
  op: 'replace',
  path: '/name',
  value: 'New Name'
}
```
