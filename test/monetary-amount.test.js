import schema from '../src/monetary-amount.schema.json'

import currency_code_schema from '../src/currency-code.schema.json'

import Ajv from 'ajv/dist/2020'

describe('Monetary amount', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()

    /*
    Avj will not fetch remote schema that are referenced in the schema.
    Referenced schemas must be added to the ajv instance before validating the main schema.

    https://ajv.js.org/api.html#ajv-addschema-schema-object-object-key-string-ajv
    */
    ajv.addSchema(currency_code_schema, 'currency-code.schema.json')
  })

  test('validates a valid monetary amount: USD', () => {
    const data = {
      value: '100.50',
      currency_code: 'USD'
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  test('invalidates an invalid monetary amount: invalid currency code', () => {
    const data = {
      amount: -100.50,
      currency: 'INVALID'
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
