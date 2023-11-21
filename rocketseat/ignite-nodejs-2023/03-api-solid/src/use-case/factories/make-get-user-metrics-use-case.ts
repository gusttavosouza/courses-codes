import { PrimaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository';
import { GetUserMetricsUseCase } from '../get-user-metrics';

export function makeGetUserMetricsUseCase() {
  const prismaCheckInsRepository = new PrimaCheckInsRepository();

  return new GetUserMetricsUseCase(prismaCheckInsRepository);
}
