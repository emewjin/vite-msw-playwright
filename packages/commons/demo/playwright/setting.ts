import { rest } from 'msw';
import { test as base } from '@playwright/test';
import { MockServiceWorker, createWorkerFixture } from 'playwright-msw';
import handlers from '../src/mocks/handlers';

const test = base.extend<{
  worker: MockServiceWorker;
  rest: typeof rest;
}>({
  worker: createWorkerFixture(...handlers),
  rest,
});

export { test, rest };
