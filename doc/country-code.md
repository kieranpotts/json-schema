# Country code

**Schema:** [country-code.schema.json](../src/country-code.schema.json)

This schema defines a two-letter country code, as specified in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

## Valid examples

- `GB`
- `US`
- `CA`
- `DE`
- `FR`

Any two-character string, consisting of only upper case US-ASCII letters, is valid. The schema does not check if the code is an assigned country code as per ISO 3166-1 alpha-2. For example, `ZZ` is valid according to this schema, but it is not a currently-assigned ISO 3166-1 alpha-2 country code.

## Invalid examples

- `G`
- `GBR`
- `gB`
- `GB1`
- `GB-`
