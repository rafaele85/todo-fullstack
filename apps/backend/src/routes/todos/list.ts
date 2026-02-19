import type { FastifyInstance } from 'fastify';
import { prisma } from '../../db.js';

export const registerListTodosRoute = (app: FastifyInstance): void => {
  app.get('/todos', async (_request, reply) => {
    const todos = await prisma.todo.findMany();
    return reply.status(200).send(todos);
  });
};
