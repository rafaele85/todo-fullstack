import { buildApp } from '../../app.js';
import { registerCreateTodoRoute } from './create.js';
import { prisma } from '../../db.js';

jest.mock('../../db.js', () => ({
  prisma: { todo: { create: jest.fn() } },
}));

describe('POST /todos', () => {
  beforeEach(() => jest.resetAllMocks());

  it('returns 201 with created todo', async () => {
    const todo = { id: 1, title: 'Buy milk', completed: false, createdAt: new Date(), updatedAt: new Date() };
    jest.mocked(prisma.todo.create).mockResolvedValue(todo);

    const app = buildApp();
    registerCreateTodoRoute(app);
    const response = await app.inject({ method: 'POST', url: '/todos', payload: { title: 'Buy milk' } });

    expect(response.statusCode).toBe(201);
    expect(response.json()).toMatchObject({ id: 1, title: 'Buy milk', completed: false });
  });

  it('returns 400 when title is missing', async () => {
    const app = buildApp();
    registerCreateTodoRoute(app);
    const response = await app.inject({ method: 'POST', url: '/todos', payload: {} });

    expect(response.statusCode).toBe(400);
  });
});
