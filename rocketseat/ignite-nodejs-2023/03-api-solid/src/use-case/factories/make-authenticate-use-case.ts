import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';
import { AuthenticationUseCase } from '../authenticate';

export function makeAuthenticateUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository();

  return new AuthenticationUseCase(prismaUsersRepository);
}
