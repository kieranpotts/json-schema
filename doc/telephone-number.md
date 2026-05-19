# Telephone number

**Schema:** [telephone-number.schema.json](../src/telephone-number.schema.json)

This schema defines a telephone number, represented in its canonical international format as defined by the E.164 numbering plan.

## Valid examples

**US telephone number**
```json
{
  country_code: '1',
  national_number: '8005551234'
}
```

## Invalid examples

```json
{
  countryCode: '+1',
  number: 'ABCDEF'
}
```
