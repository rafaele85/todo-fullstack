import type { FastifyInstance } from 'fastify';
import { registerCreateTodoRoute } from './create.js';
import { registerListTodosRoute } from './list.js';

export const todosRouter = async (app: FastifyInstance): Promise<void> => {
  registerCreateTodoRoute(app);
  registerListTodosRoute(app);
};
