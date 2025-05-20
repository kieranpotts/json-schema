import schema from '../src/province.schema.json'

import country_code_schema from '../src/country-code.schema.json'

import Ajv from 'ajv/dist/2020'

describe('Province', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()

    /*
    Avj will not fetch remote schema that are referenced in the schema.
    Referenced schemas must be added to the ajv instance before validating the main schema.

    https://ajv.js.org/api.html#ajv-addschema-schema-object-object-key-string-ajv
    */
    ajv.addSchema(country_code_schema, 'country-code.schema.json')
  })

  test('validates a valid US province', () => {
    const data = {
      province_code: "US-CA",
      country_code: "US",
      local_name: "California",
      latin_name: "California",
      abbreviation: "CA"
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  test('invalidates an invalid province: string value', () => {
    const data = 'InvalidProvince'

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
