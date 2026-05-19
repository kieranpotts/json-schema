# Date and time

**Schema:** [date-time.schema.json](../src/date-time.schema.json)

This schema defines a valid date-time representation as defined in [IETF RFC 3339 section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6), which itself is a profile of the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard.

> **Important:** The regular expression cannot reject all invalid dates, but only provide guidance. A practical length limit is defined for the number of fractional seconds.

## Valid examples

- `2023-10-01T12:34:56Z`
