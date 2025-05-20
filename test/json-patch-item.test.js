import schema from '../src/json-patch-item.schema.json'
import Ajv from 'ajv/dist/2020'

describe('JSON Patch item', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv({
      allowUnionTypes: true
    })
  })

  test('validates a valid JSON Patch item: replace', () => {
    const data = {
      op: 'replace',
      path: '/name',
      value: 'New Name'
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  test('invalidates an invalid JSON Patch item', () => {
    const data = {
      op: 'invalid-op',
      path: '/name'
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
