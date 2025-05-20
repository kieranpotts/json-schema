import schema from '../src/email-address.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Email address', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    'example@example.com',
  ]

  test.each(valid_data)('validates a valid email address: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    'invalid-email',
  ]

  test.each(invalid_data)('invalidates an invalid email address: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
