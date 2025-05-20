import schema from '../src/telephone-type.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Telephone type', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    'FAX',
    'HOME',
    'MOBILE',
    'OTHER',
    'PAGER',
  ]

  test.each(valid_data)('validates a valid telephone type: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    'INVALID',
    '123',
    'TELEPHONE',
    'PHONE',
    'WORK',
    'TELEPATHY',
  ]

  test.each(invalid_data)('invalidates an invalid telephone type: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
