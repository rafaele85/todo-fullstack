import { z } from 'zod';
import type { FastifyInstance } from 'fastify';
import { type ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../db.js';

const createTodoBody = z.object({
  title: z.string().min(1),
  completed: z.boolean().optional(),
});

export const registerCreateTodoRoute = (app: FastifyInstance): void => {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/todos',
    { schema: { body: createTodoBody } },
    async (request, reply) => {
      const { title, completed } = request.body;
      const todo = await prisma.todo.create({
        data: { title, completed: completed ?? false },
      });
      return reply.status(201).send(todo);
    },
  );
};
