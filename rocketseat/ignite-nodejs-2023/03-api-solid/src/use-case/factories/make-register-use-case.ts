import { RegisterUseCase } from '../register';
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';

export function makeRegisterUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository();

  return new RegisterUseCase(prismaUsersRepository);
}
