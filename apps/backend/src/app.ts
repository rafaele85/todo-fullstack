import Fastify from 'fastify';
import type { FastifyInstance } from 'fastify';

export const buildApp = (): FastifyInstance => {
  const app = Fastify({ logger: true });
  return app;
};
