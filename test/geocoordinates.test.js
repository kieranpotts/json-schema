import schema from '../src/geocoordinates.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Geocoordinates', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  test('validates valid geocoordinates', () => {
    const data = {
      latitude: '37.7749',
      longitude: '-122.4194'
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  test('invalidates invalid geocoordinates', () => {
    const data = {
      latitude: 95.1234,
      longitude: -200.5678
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
