import schema from '../src/telephone-number.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Telephone number', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  test('validates a valid US telephone number', () => {
    const data = {
      country_code: '1',
      national_number: '8005551234'
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  test('invalidates an invalid US telephone number', () => {
    const data = {
      countryCode: '+1',
      number: 'ABCDEF'
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
