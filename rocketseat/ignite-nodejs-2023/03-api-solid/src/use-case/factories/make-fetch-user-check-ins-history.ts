import { FetchUserCheckInsUseCase } from '../fetch-user-check-ins-history';
import { PrimaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository';

export function makeFetchUserCheckInsHistoryUseCase() {
  const prismaCheckInsRepository = new PrimaCheckInsRepository();

  return new FetchUserCheckInsUseCase(prismaCheckInsRepository);
}
