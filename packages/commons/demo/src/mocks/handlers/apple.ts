import { rest } from 'msw';

import { appleSuccessFixture } from '../fixtures/apple';

export const ENDPOINT = '/v1/apple';

export const appleHandlers = [
  rest.get(ENDPOINT, (_req, res, ctx) => res(ctx.json(appleSuccessFixture()))),
];
