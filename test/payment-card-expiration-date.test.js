import schema from '../src/payment-card-expiration-date.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Payment card expiration date', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    '12/25',
    '12/2025',
  ]

  test.each(valid_data)('validates a valid payment card expiration date: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    '13/25',
    '13/2025',
  ]

  test.each(invalid_data)('invalidates an invalid payment card expiration date: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
