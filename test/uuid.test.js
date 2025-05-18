import schema from '../src/uuid.schema.json'
import Ajv from 'ajv/dist/2020'

describe('UUID', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    '123e4567-e89b-12d3-a456-426614174000',
    '96d2a9ea-7fc7-4576-b025-d027faecd293',
    '07f015b0-e424-46fb-b1b2-041b2bf17331',
    'ec07e993-08dc-4f7b-b97a-568ce3d33cc8',
    'ab870350-9e6c-4226-a92a-2014310a7f72',
  ]

  test.each(valid_data)('validates a valid uuid: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  it('validates a valid uuid: nil uuid', () => {
    const data = '00000000-0000-0000-0000-000000000000'

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  it('validates a valid uuid: max uuid', () => {
    const data = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF'

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  it('invalidates an invalid UUID: too short', () => {
    const data = '34dd08ca-c95a-4391-9909-d157c4bb4d2'

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })

  it('invalidates an invalid UUID: too long', () => {
    const data = '12345678-90ab-cdef-1234-567890abcdefg'

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })

  it('invalidates an invalid UUID: invalid hyphen placement', () => {
    const data = 'abcd-1234-efgh-5678-ijklmnopqrst'

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
