import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateGymUseCase } from '@/use-case/factories/make-create-gym-use-case';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
    phone: z.string().nullable(),
    latitude: z.number().refine((value) => Math.abs(value) <= 90),
    longitude: z.number().refine((value) => Math.abs(value) <= 180),
  });

  const { title, description, phone, latitude, longitude } =
    createBodySchema.parse(request.body);

  const registerUseCase = makeCreateGymUseCase();

  await registerUseCase.execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  });

  return reply.status(201).send();
}
