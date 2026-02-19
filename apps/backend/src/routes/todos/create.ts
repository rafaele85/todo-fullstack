import { z } from 'zod';
import type { FastifyInstance } from 'fastify';
import { prisma } from '../../db.js';

const createTodoBody = z.object({
  title: z.string().min(1),
  completed: z.boolean().optional(),
});

export type CreateTodoBody = z.infer<typeof createTodoBody>;

export const registerCreateTodoRoute = (app: FastifyInstance): void => {
  app.post('/todos', async (request, reply) => {
    const result = createTodoBody.safeParse(request.body);
    if (!result.success) {
      return reply.status(400).send({ error: result.error.flatten() });
    }
    const { title, completed } = result.data;
    const todo = await prisma.todo.create({
      data: { title, completed: completed ?? false },
    });
    return reply.status(201).send(todo);
  });
};
