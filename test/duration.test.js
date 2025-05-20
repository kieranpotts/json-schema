import schema from '../src/duration.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Duration', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    'P1Y2M3DT4H5M6S',
  ]

  test.each(valid_data)('validates a valid duration: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    '1Y2M3D4H5M6S',
  ]

  test.each(invalid_data)('invalidates an invalid duration: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
