# Percentage

**Schema:** [percentage.schema.json](../src/percentage.schema.json)

This schema defines a percentage value, expressed as a fixed-point signed decimal number.

The value MUST be encoded as a string (integers and floating-point numbers are invalid). Applications MUST NOT deserialize the value to a JavaScript Number object, which is a 64-bit floating-point number and therefore cannot accurately represent all values transmitted by this type. In Java, this type MUST be deserialized into a BigDecimal or other fixed-point numeric type.

## Valid examples

- `"-25"`
- `"0"`
- `"5.25"`
- `"75"`
- `"150"`

## Invalid examples

- `-25`
- `0`
- `5.25`
- `75`
- `150`
