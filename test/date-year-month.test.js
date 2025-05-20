import schema from '../src/date-year-month.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Date (year and month only)', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    '2023-10',
  ]

  test.each(valid_data)('validates a valid year-month date: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    '2023-13',
  ]

  test.each(invalid_data)('invalidates an invalid year-month date: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
