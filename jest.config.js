module.exports = {
  // JEST common config
  bail: false,
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  roots: ['<rootDir>/src'], // Local project ROOT
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests-jest.ts'],

  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'babel-jest',
  },
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|(\\.|/)(spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // For TS/TSX testing
    '^.+\\.jsx?$': 'babel-jest', // For JS/JSX testing
  },
  verbose: true,

  // Code Coverage
  collectCoverage: true,
  coverageReporters: ['text', 'html', 'cobertura', 'json-summary'],

  // To run all TEST from the ROOT of the monorepo
  // JEST must be installed in ROOT MONOREPO project, too
  // projects: [
  //   '<rootDir>/sports/libraries/livedata-sports-design-system/jest.config.js'
  // ],
};
