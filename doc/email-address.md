# Email address

**Schema:** [email-address.schema.json](../src/email-address.schema.json)

This schema defines a valid internationalized email address, as defined by [IETF RFC 5322](https://datatracker.ietf.org/doc/html/rfc5322), [RFC 6530](https://datatracker.ietf.org/doc/html/rfc6530), and other standards.

It is practically impossible to define a single regular expression that can validate all possible international email address formats. Therefore, this pattern verifies only that the string contains an unquoted @ sign and is no longer than 254 characters.

> **Note:** Due to RFC 5321, an email address can be up to 254 characters long – even though up to 64 characters are allowed before the @ sign, and 255 characters are allowed after the @ sign.

## Valid examples

- `example@example.com`
