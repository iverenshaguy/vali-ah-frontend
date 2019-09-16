module.exports = {
  reporters: ['default', ['jest-junit', { suiteName: 'jest tests' }]],
  testMatch: [
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx}',
    '<rootDir>/tests/storybook.test.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setupUnitTests.js'],
  collectCoverage: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/tests/__mocks__/style.js',
    '^fixtures/(.*)$': '<rootDir>/tests/fixtures/$1',
    '^mocks/(.*)$': '<rootDir>/tests/__mocks__/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/tests/__mocks__/fileMock.js'
  }
};
