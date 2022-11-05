import type { Config } from '@jest/types';

import jestBaseConfig from '../../../jest.config.base';

const config: Config.InitialOptions = {
  ...jestBaseConfig,
  coveragePathIgnorePatterns: ['node_modules'],
};

export default config;
