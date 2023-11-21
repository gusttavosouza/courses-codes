import { PrimaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository';
import { ValidateCheckInUseCase } from '../validate-check-in';

export function makeValidateCheckIn() {
  const prismaCheckInsRepository = new PrimaCheckInsRepository();

  return new ValidateCheckInUseCase(prismaCheckInsRepository);
}
