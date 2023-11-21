import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeFetchNearbyGymsUseCase } from '@/use-case/factories/make-fetch-nearby-gyms';

export async function nearby(request: FastifyRequest, reply: FastifyReply) {
  const nearbyGymsQuerySchema = z.object({
    latitude: z.coerce.number().refine((value) => Math.abs(value) <= 90),
    longitude: z.coerce.number().refine((value) => Math.abs(value) <= 180),
  });

  const { latitude, longitude } = nearbyGymsQuerySchema.parse(request.query);

  const nearbyUseCase = makeFetchNearbyGymsUseCase();

  const { gyms } = await nearbyUseCase.execute({
    userLatitude: latitude,
    userLongitude: longitude,
  });

  return reply.status(200).send({
    gyms,
  });
}
