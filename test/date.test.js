import schema from '../src/date.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Date (no time)', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    '2023-10-01',
  ]

  test.each(valid_data)('validates a valid date: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    '2023-02-BB',
  ]

  test.each(invalid_data)('invalidates an invalid date: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
