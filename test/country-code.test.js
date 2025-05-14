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

  it('invalidates an invalid country code', () => {
    const data = 'XYZ';

    const validate = ajv.compile(schema)
    const isValid = validate(data);

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
