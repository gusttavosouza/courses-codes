import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeSearchGymsUseCase } from '@/use-case/factories/make-search-gyms';

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const searchGymsQuerySchema = z.object({
    query: z.string(),
    page: z.coerce.number().min(1).default(1),
  });

  const { query, page } = searchGymsQuerySchema.parse(request.query);

  const searchUseCase = makeSearchGymsUseCase();

  const { gyms } = await searchUseCase.execute({ query, page });

  return reply.status(200).send({
    gyms,
  });
}
