# JSON Schema

This repository contains a collection of common JSON Schema type definitions.

![Tests passing](https://img.shields.io/github/actions/workflow/status/kieranpotts/json-schema/run-tests.yaml?branch=dev&style=flat-square&label=tests&labelColor=%23333333&color=%23008800)
![Open issues](https://img.shields.io/github/issues/kieranpotts/json-schema?style=flat-square&labelColor=%23333333&color=%23BB2200)
![Pull requests](https://img.shields.io/github/issues-pr/kieranpotts/json-schema?style=flat-square&labelColor=%23333333&color=%232266EE)

## Schemas

The following schemas are available:

- [Address](./doc/address.md)
- [Country code](./doc/country-code.md)
- [Currency code](./doc/currency-code.md)
- [Date and time](./doc/date-time.md)
- [Date (year and month only)](./doc/date-year-month.md)
- [Date (no time)](./doc/date.md)
- [Duration](./doc/duration.md)
- [Email address](./doc/email-address.md)
- [Geocoordinates](./doc/geocoordinates.md)
- [JSON Patch item](./doc/json-patch-item.md)
- [JSON Web Encryption (JWE) token](./doc/json-web-encryption-token.md)
- [JSON Web Signature (JWS) token](./doc/json-web-signature-token.md)
- [Language code](./doc/language-code.md)
- [Locale](./doc/locale.md)
- [Monetary amount](./doc/monetary-amount.md)
- [Payment card expiration date](./doc/payment-card-expiration-date.md)
- [Percentage](./doc/percentage.md)
- [Person name](./doc/person-name.md)
- [Province](./doc/province.md)
- [Telephone number](./doc/telephone-number.md)
- [Telephone type](./doc/telephone-type.md)
- [Time (no date)](./doc/time.md)
- [Timezone](./doc/timezone.md)
- [UUID](./doc/uuid.md)

## Testing

Tests can be run in a containerized environment. The only requirement is that you have **Docker** installed and running on your system. All other dependencies will be installed in the container.

First, make sure the `run` script, in the root directory of this repository, is executable:

```
chmod +x run
```

To run the tests, run the following command from the root directory of this repository:

```
./run test
```

## Acknowledgements

- [PayPal JSON Schema](https://github.com/levid-gc/paypal-api-standards/tree/master/v1/schema/json/draft-04)

---

Copyright © 2020-present Kieran Potts, [MIT license](./LICENSE.txt)
