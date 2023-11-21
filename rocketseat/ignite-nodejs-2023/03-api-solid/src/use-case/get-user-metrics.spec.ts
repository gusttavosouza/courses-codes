import { expect, describe, it, beforeEach } from 'vitest';

import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository';
import { GetUserMetricsUseCase } from './get-user-metrics';

describe('Fetch User Check-In Use Case', () => {
  let checkInRepository: InMemoryCheckInsRepository;
  let sut: GetUserMetricsUseCase;

  beforeEach(async () => {
    checkInRepository = new InMemoryCheckInsRepository();
    sut = new GetUserMetricsUseCase(checkInRepository);
  });

  it('Should be able to fetch check-in history', async () => {
    await checkInRepository.create({
      gym_id: 'gym_01',
      user_id: 'user_01',
    });

    await checkInRepository.create({
      gym_id: 'gym_02',
      user_id: 'user_01',
    });

    await checkInRepository.create({
      gym_id: 'gym_03',
      user_id: 'user_01',
    });

    const { checkInsCount } = await sut.execute({
      userId: 'user_01',
    });

    expect(checkInsCount).toBe(3);
  });
});
