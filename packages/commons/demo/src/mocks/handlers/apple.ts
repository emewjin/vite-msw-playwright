import { rest } from 'msw';

import { appleSuccessFixture } from '../fixtures/apple';

export const ENDPOINT = 'http://localhost:5173/v1/apple';

export const set = (data: Record<string, unknown>) => {
  return {
    statusCode: 200,
    message: '',
    data,
  };
};

export const appleHandlers = [
  rest.get(ENDPOINT, (_req, res, ctx) =>
    res(ctx.json(set(appleSuccessFixture())))
  ),
];
