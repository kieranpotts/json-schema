import schema from '../src/timezone.schema.json'
import Ajv from 'ajv/dist/2020'

describe('Timezone', () => {
  let ajv

  beforeAll(() => {
    ajv = new Ajv()
  })

  const valid_data = [
    'America/New_York',
    'Etc/UTC',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney',
  ]

  test.each(valid_data)('validates a valid timezone: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(true)
    expect(validate.errors).toBeNull()
  })

  const invalid_data = [
    'EST',
    'UTC',
    'GB'
  ]

  test.each(invalid_data)('invalidates an invalid timezone: %p', (data) => {
    const validate = ajv.compile(schema)
    const isValid = validate(data)

    expect(isValid).toBe(false)
    expect(validate.errors).not.toBeNull()
  })
})
