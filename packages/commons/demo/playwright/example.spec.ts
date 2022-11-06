import { appleSuccessFixture } from '../src/mocks/fixtures/apple';

import { ENDPOINT } from '../src/mocks/handlers/apple';
import { expect, test } from './setting';

test.describe('demo', () => {
  test('is red apple', async ({ page, worker, rest }) => {
    await worker.use(
      rest.get(ENDPOINT, (_req, res, ctx) =>
        res(ctx.json(appleSuccessFixture({ isRed: true })))
      )
    );

    await page.goto('/');

    await expect(page.locator('#App')).toHaveText('apple color: red');
  });

  test('is green apple', async ({ page, worker, rest }) => {
    await worker.use(
      rest.get(ENDPOINT, (_req, res, ctx) =>
        res(ctx.json(appleSuccessFixture({ isRed: false })))
      )
    );

    await page.goto('/');

    await expect(page.locator('#App')).toHaveText('apple color: green');
  });
});
