import schema from '../src/time.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Time (no date)', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    '14:30:45Z',
  ]

  test.each(valid_data)('validates a valid time: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    '25:61',
  ]

  test.each(invalid_data)('invalidates an invalid time: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
