import schema from '../src/country-code.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Country code', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  it('validates a valid country code', () => {
    const data = 'US'

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    '',
    'XYZ',
    '123',
    'G',
    'GBR',
    'gB',
    'GB1',
    'GB-',
    null,
    undefined,
    {},
    []
  ]

  test.each(invalid_data)('invalidates invalid country code: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
