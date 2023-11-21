import { Gym } from 'prisma/prisma-client';
import { GymRepository } from '@/repositories/gyms-repository';

interface SearchGymsUseCaseRequest {
  query: string;
  page: number;
}

interface SearchGymsUseCaseResponse {
  gyms: Gym[];
}

export class SearchGymsUseCase {
  private gymsRepository: GymRepository;

  constructor(gymsRepository: GymRepository) {
    this.gymsRepository = gymsRepository;
  }

  async execute({
    query,
    page,
  }: SearchGymsUseCaseRequest): Promise<SearchGymsUseCaseResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page);

    return { gyms };
  }
}
