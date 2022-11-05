import type { Config } from '@jest/types';

const jestBaseConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^lodash-es$': 'lodash',
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: [
    `${__dirname}/jest.setup.ts`,
    '<rootDir>/jest.setup.ts',
    'jest-plugin-context/setup',
  ],
};

export default jestBaseConfig;
