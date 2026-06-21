/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/index.ts'],
  coverageThreshold: {
    global: {
      // Lines and statements are high — keep strict
      lines: 80,
      statements: 80,
      // Route files have partial test coverage — these reflect actual project state
      // Increase these as more route tests are added
      branches: 30,
      functions: 35,
    },
  },
  // jest-junit: generates XML report for CircleCI's "Tests" tab.
  // Output path is controlled by JEST_JUNIT_OUTPUT_DIR env var set in config.yml.
  // Activated only when using the `test:ci` script which passes --reporters=jest-junit.
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './test-results',
        outputName: 'junit.xml',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
        ancestorSeparator: ' › ',
      },
    ],
  ],
};
