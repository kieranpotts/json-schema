import schema from '../src/language-code.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Language code', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    'en',
  ]

  test.each(valid_data)('validates a valid language code: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    'invalid-code',
  ]

  test.each(invalid_data)('invalidates an invalid language code: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
