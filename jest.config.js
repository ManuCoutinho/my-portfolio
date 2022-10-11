/** @type {import('jest').Config} */
const nextJest = require('next/jest')
const customJestConfig = {
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  collectCoverage: false,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!**/*.d.ts',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**'
  ],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src/'],
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/__mocks__/fileMock.js',
  //   '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  // },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|tests).[tj]s?(x)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/.out/',
    '/public/'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/.jest/jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$']
}
const createJestConfig = nextJest({
  dir: './'
})

module.exports = createJestConfig(customJestConfig)
