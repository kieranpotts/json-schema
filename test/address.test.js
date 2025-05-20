import schema from '../src/address.schema.json'

import country_code_schema from '../src/country-code.schema.json'

import Ajv from 'ajv/dist/2020'

describe('Address', () => {
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

  test('validates a valid US address', () => {
    const data = {
      address_line_1: '123 Main St',
      address_line_2: 'Apt 4B',
      admin_area_2: 'Springfield',
      admin_area_1: 'IL',
      postal_code: '62704',
      country_code: 'US',
      address_details: {
        street_number: '123',
        street_name: 'Main',
        street_type: 'St',
        building_name: 'Main Building',
        sub_building: 'Apt 4B'
      }
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  test('invalidates an invalid US address', () => {
    const data = {
      streetAddress: '',
      city: 'Springfield',
      state: 'IL',
      postalCode: 'INVALID',
      country: 'US'
    }

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
