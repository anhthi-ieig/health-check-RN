import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/metro.config.js',
    '!**/react-native.config.js',
    '!**/jestSetup.js',
    '!**/.eslintrc.js',
    '!**/.expo/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/jestSetup.ts'],
};

export default config;
