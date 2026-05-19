# Time (no date)

**Schema:** [time.schema.json](../src/time.schema.json)

This schema defines a time value, as specified in [IETF RFC 3339 section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6), but with a practical limit on the length of the fractional seconds part.

## Valid examples

- `14:30:45Z`

## Invalid examples

- `25:61`
