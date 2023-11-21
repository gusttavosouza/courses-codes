import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCheckInUseCase } from '@/use-case/factories/make-check-in-use-case';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createParamsSchema = z.object({
    gymId: z.string().uuid(),
  });

  const createBodySchema = z.object({
    latitude: z.number().refine((value) => Math.abs(value) <= 90),
    longitude: z.number().refine((value) => Math.abs(value) <= 180),
  });

  const { latitude, longitude } = createBodySchema.parse(request.body);
  const { gymId } = createParamsSchema.parse(request.params);

  const createCheckInUseCase = makeCheckInUseCase();

  await createCheckInUseCase.execute({
    gymId,
    userId: request.user.sub,
    userLatitude: latitude,
    userLongitude: longitude,
  });

  return reply.status(201).send();
}
