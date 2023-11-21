import { CheckIn } from 'prisma/prisma-client';
import { CheckInsRepository } from '@/repositories/check-ins-repository';

interface FetchUserCheckInsUseCaseRequest {
  userId: string;
  page: number;
}

interface FetchUserCheckInsUseCaseResponse {
  checkIns: CheckIn[];
}

export class FetchUserCheckInsUseCase {
  private checkInsRepository: CheckInsRepository;

  constructor(checkInsRepository: CheckInsRepository) {
    this.checkInsRepository = checkInsRepository;
  }

  async execute({
    userId,
    page,
  }: FetchUserCheckInsUseCaseRequest): Promise<FetchUserCheckInsUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page
    );

    return {
      checkIns,
    };
  }
}
