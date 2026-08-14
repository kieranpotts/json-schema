# JSON Schema

A collection of common JSON Schema type definitions (address, country code,
currency code, date/time variants, duration, email address, geocoordinates,
JSON Patch item, JWE/JWS token, language code, locale, monetary amount,
payment card expiration date, percentage, person name, province, telephone
number/type, timezone, UUID). Each schema has a companion doc page and Jest
test suite.

The capitalized words REQUIRED, MUST, MUST NOT, RECOMMENDED, SHOULD,
SHOULD NOT, OPTIONAL, and MAY are to be interpreted as described in
[IETF RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

## Tech stack

- JSON Schema (the actual deliverable — `.schema.json` files).
- Node.js (`^20.9.0`), npm (`^10.1.0`), ECMAScript modules.
- Ajv and Jest (via Babel) for automated tests.
- Docker, used to run tests in a clean, reproducible environment — not to
  ship a runtime artifact.
- GitHub Actions for CI (test run, stale-issue flagging, commit-message
  validation, label sync).

## Project structure

- **[src/](./src/)** \
  One `<name>.schema.json` file per type definition. This is the published
  content of the repository.

- **[doc/](./doc/)** \
  One Markdown doc page per schema, matching the `src/` filenames.

- **[test/](./test/)** \
  One Jest test file per schema (`<name>.test.js`), validating example data
  against the schema with Ajv.

- **[run](./run)** \
  Builds a `json-schema` Docker image from the root `Dockerfile` and runs any
  `npm run` script inside a disposable container, cleaning up the image and
  container afterwards.

## Tools

- `./run test` \
  Builds the Docker image and runs `npm test` (Jest) inside a container.
  The only local requirement is Docker. All other dependencies install
  inside the image.

- `npm test` \
  Runs the Jest suite directly, if Node/npm dependencies are already
  installed locally.

## Rules

- MUST add a matching `doc/<name>.md` and `test/<name>.test.js` whenever a
  new `src/<name>.schema.json` is added — every existing schema follows this
  three-file pattern.

- MUST keep schema filenames consistent across `src/`, `doc/`, and `test/`
  (`<name>.schema.json`, `<name>.md`, `<name>.test.js`).

## References

The following technical standards (TS) govern this project. Fetch and ingest
the relevant standards as-and-when required for the task at hand.

- [**TS-9: Version Control**](https://kieranpotts.com/standards/009) \
  Use when working with Git. Covers commits, branching, merging, integration
  strategies, cutting releases, and configuring Git/PR/CI tooling.

- [**TS-13: Functional Testing**](https://kieranpotts.com/standards/013) \
  Use when designing, writing, or reviewing functional tests. Covers test
  strategy, types, levels, coverage, test doubles, and TDD.

- [**TS-25: Technical Documentation**](https://kieranpotts.com/standards/025) \
  Use when deciding what documentation a project needs, where it should live,
  who it's for, or whether it's still trustworthy.

- [**TS-29: JSON Schema**](https://kieranpotts.com/standards/029) \
  Use when designing or using JSON Schema. Covers validation, `$ref`, OpenAPI,
  JSON-LD, and JSON Pointer.

- [**TS-58: Docker**](https://kieranpotts.com/standards/058) \
  Use when designing Dockerfiles, building Docker images, or running Docker
  containers.

- [**TS-60: GitHub Actions**](https://kieranpotts.com/standards/060) \
  Use when designing, authoring, reviewing, or securing GitHub Actions workflows
  or custom actions.
