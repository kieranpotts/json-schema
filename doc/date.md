# Date (no time)

**Schema:** [date.schema.json](../src/date.schema.json)

This schema defines a standalone date, as represented by the full-date chunk specified in [IETF RFC 3339 section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6).

Dates with no associated time or timezone are typically used to represent dates of birth, etc.

> **Important:** The regular expression is not a complete validation. 31 February is allowed, for example, and nothing is known about leap years.

## Valid examples

- `2023-10-01`
