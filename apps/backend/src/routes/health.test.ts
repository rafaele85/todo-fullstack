import { buildApp } from '../app.js';
import { registerHealthRoute } from './health.js';

describe('GET /health', () => {
  it('returns 200 with status ok', async () => {
    const app = buildApp();
    registerHealthRoute(app);

    const response = await app.inject({ method: 'GET', url: '/health' });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: 'ok' });
  });
});
