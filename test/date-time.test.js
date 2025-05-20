import schema from '../src/date-time.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Date and time', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    '2023-10-01T12:34:56Z',
  ]

  test.each(valid_data)('validates a valid date-time: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    '2023-13-01T25:61:61Z',
  ]

  test.each(invalid_data)('invalidates an invalid date-time: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
