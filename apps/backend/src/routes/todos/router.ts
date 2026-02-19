import type { FastifyInstance } from 'fastify';
import { registerCreateTodoRoute } from './create.js';

export const todosRouter = async (app: FastifyInstance): Promise<void> => {
  registerCreateTodoRoute(app);
};
