/*
Jest configuration.
https://jestjs.io/docs/configuration
*/

'use strict'

/** @type {import('jest').Config} */
const config = {

  /* The file extensions used by JavaScript modules. */
  'moduleFileExtensions': [
    'js',
  ],

  /* The glob patterns Jest should use to detect test files. */
  'testMatch': [
    '<rootDir>/test/**/*.test.js',
  ],

  /*
  Load Jest plugins to enable transformation of both source files and test
  files. This happens dynamically at runtime, when the tests are run.

  Because Jest's built-in support for ECMAScript Modules is still
  experimental (https://jestjs.io/docs/ecmascript-modules), it is necessary
  to use Babel to transform JavaScript code before the tests are run.

  https://jestjs.io/docs/configuration
  https://jestjs.io/docs/code-transformation
  https://www.npmjs.com/package/babel-jest
  */

  'transform': {
    '^.+\\.js$': [
      'babel-jest',
      {
        'configFile': './babel.config.cjs',
      },
    ],
  },

}

module.exports = config
