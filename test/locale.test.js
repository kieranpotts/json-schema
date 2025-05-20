import schema from '../src/locale.schema.json'

import country_code_schema from '../src/country-code.schema.json'
import language_code_schema from '../src/language-code.schema.json'
import timezone_schema from '../src/timezone.schema.json'

import Ajv from 'ajv/dist/2020'

describe('Locale', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()

    /*
    Avj will not fetch remote schema that are referenced in the schema.
    Referenced schemas must be added to the ajv instance before validating the main schema.

    https://ajv.js.org/api.html#ajv-addschema-schema-object-object-key-string-ajv
    */
    ajv.addSchema(country_code_schema, 'country-code.schema.json')
    ajv.addSchema(language_code_schema, 'language-code.schema.json')
    ajv.addSchema(timezone_schema, 'timezone.schema.json')
  })

  test('validates a valid locale: US en', () => {
    const data = {
      country_code: 'US',
      language: 'en' // TODO: Should this be "language_code"?
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  test('invalidates an invalid locale: string value', () => {
    const data = 'invalid-locale'

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
