import schema from '../src/currency-code.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Currency code', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    'USD',
  ]

  test.each(valid_data)('validates a valid currency code: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    'INVALID',
  ]

  test.each(invalid_data)('invalidates an invalid currency code: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
