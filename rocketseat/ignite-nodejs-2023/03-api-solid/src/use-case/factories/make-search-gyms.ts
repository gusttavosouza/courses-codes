import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository';
import { SearchGymsUseCase } from '../search-gyms';

export function makeSearchGymsUseCase() {
  const prismaGymsRepository = new PrismaGymsRepository();
  return new SearchGymsUseCase(prismaGymsRepository);
}
