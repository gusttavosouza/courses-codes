import { CheckInUseCase } from '../check-in';
import { PrimaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository';
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository';

export function makeCheckInUseCase() {
  const prismaCheckInRepository = new PrimaCheckInsRepository();
  const prismaGymsRepository = new PrismaGymsRepository();

  return new CheckInUseCase(prismaCheckInRepository, prismaGymsRepository);
}
