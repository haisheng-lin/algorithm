/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  coverageDirectory: '<rootDir>/coverage',

  moduleFileExtensions: ['js', 'json', 'ts'],

  collectCoverageFrom: ['src/**/*.{js,ts}'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  testMatch: ['**/__tests__/*.spec.ts'],
};
