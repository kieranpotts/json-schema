import schema from '../src/percentage.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Percentage', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    '-25',
    '0',
    '5.25',
    '75',
    '150',
  ]

  test.each(valid_data)('validates a valid percentage: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_types = [
    -25,
    0,
    5.25,
    75,
    150,
    null,
    undefined,
    true,
    {},
    [],
    new Number(5),
    new String(''),
  ]

  test.each(invalid_types)('invalidates an invalid percentage - wrong type: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
