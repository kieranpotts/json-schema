import schema from '../src/person-name.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Person name', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  test('validates a valid person name: given name and surname only', () => {
    const data = {
      given_name: 'John',
      surname: 'Doe'
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  test('invalidates an invalid person name: string value', () => {
    const data = 'First Last'

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
