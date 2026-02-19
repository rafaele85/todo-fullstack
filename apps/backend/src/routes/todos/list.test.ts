import { buildApp } from '../../app.js';
import { prisma } from '../../db.js';

jest.mock('../../db.js', () => ({
  prisma: { todo: { findMany: jest.fn(), create: jest.fn() } },
}));

describe('GET /todos', () => {
  beforeEach(() => jest.resetAllMocks());

  it('returns 200 with array of todos', async () => {
    const todos = [
      { id: 1, title: 'Buy milk', completed: false, createdAt: new Date(), updatedAt: new Date() },
    ];
    jest.mocked(prisma.todo.findMany).mockResolvedValue(todos);

    const app = buildApp();
    const response = await app.inject({ method: 'GET', url: '/todos' });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject([{ id: 1, title: 'Buy milk', completed: false }]);
  });

  it('returns 200 with empty array when no todos exist', async () => {
    jest.mocked(prisma.todo.findMany).mockResolvedValue([]);

    const app = buildApp();
    const response = await app.inject({ method: 'GET', url: '/todos' });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual([]);
  });
});
