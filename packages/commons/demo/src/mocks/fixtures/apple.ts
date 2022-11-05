import faker from '@faker-js/faker';

export const appleSuccessFixture = (fixture?: Record<string, unknown>) => ({
  isRed: faker.datatype.boolean(),
  ...fixture,
});
