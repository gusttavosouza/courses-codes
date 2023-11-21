import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';

import { makeValidateCheckIn } from '@/use-case/factories/make-validate-check-in';

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const createParamsSchema = z.object({
    checkInId: z.string().uuid(),
  });

  const { checkInId } = createParamsSchema.parse(request.params);

  const validadeCheckInUseCase = makeValidateCheckIn();

  await validadeCheckInUseCase.execute({
    checkInId,
  });

  return reply.status(204).send();
}
