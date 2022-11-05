import { expect } from '@playwright/test';
import { appleSuccessFixture } from '../src/mocks/fixtures/apple';

import { ENDPOINT, set } from '../src/mocks/handlers/apple';
import { rest, test } from './setting';

// https://github.com/mswjs/msw/discussions/1322
// https://github.com/mswjs/msw/blob/ec57fbf1a8642e08d25a759bf86ea7885e5d5de5/test/msw-api/setup-worker/use.test.ts#L17-L25
test.describe('데모 테스트', () => {
  test('빨간 사과', async ({ page, worker }) => {
    await worker.use(
      rest.get(ENDPOINT, (_req, res, ctx) =>
        res(ctx.json(set(appleSuccessFixture({ isRed: true }))))
      )
    );

    await page.goto('/');

    await expect(page.locator('#App')).toHaveText('demo red');
  });

  test('초록 사과', async ({ page, worker }) => {
    await worker.use(
      rest.get(ENDPOINT, (_req, res, ctx) =>
        res(ctx.json(set(appleSuccessFixture({ isRed: false }))))
      )
    );

    await page.goto('/');

    await expect(page.locator('#App')).toHaveText('demo green');
  });
});
