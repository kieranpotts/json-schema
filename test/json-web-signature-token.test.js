import schema from '../src/json-web-signature-token.schema.json'
import Ajv from 'ajv/dist/2020'

describe('JSON Web Signature (JWS) token', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  test('validates a valid JWS token', () => {
    const data = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    'invalid-token',
  ]

  test.each(invalid_data)('invalidates an invalid JWS token: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
