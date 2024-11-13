module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: null,

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  modulePathIgnorePatterns: ['<rootDir>/.build', '<rootDir>/dist/', '<rootDir>/build/'],

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: 'node',
}
