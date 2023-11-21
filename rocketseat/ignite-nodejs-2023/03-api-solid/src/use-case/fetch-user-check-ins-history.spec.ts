import { expect, describe, it, beforeEach } from 'vitest';

import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository';

import { FetchUserCheckInsUseCase } from './fetch-user-check-ins-history';

describe('Fetch User Check-In Use Case', () => {
  let checkInRepository: InMemoryCheckInsRepository;
  let sut: FetchUserCheckInsUseCase;

  beforeEach(async () => {
    checkInRepository = new InMemoryCheckInsRepository();
    sut = new FetchUserCheckInsUseCase(checkInRepository);
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

    const { checkIns } = await sut.execute({
      userId: 'user_01',
      page: 1,
    });

    expect(checkIns).toHaveLength(3);
    expect(checkIns).toEqual([
      expect.objectContaining({ gym_id: 'gym_01' }),
      expect.objectContaining({ gym_id: 'gym_02' }),
      expect.objectContaining({ gym_id: 'gym_03' }),
    ]);
  });

  it('Should be able to fetch paginated check-in history', async () => {
    for (let i = 1; i <= 22; i++) {
      await checkInRepository.create({
        gym_id: `gym_${i}`,
        user_id: 'user_01',
      });
    }

    const { checkIns } = await sut.execute({
      userId: 'user_01',
      page: 2,
    });

    expect(checkIns).toHaveLength(2);
    expect(checkIns).toEqual([
      expect.objectContaining({ gym_id: 'gym_21' }),
      expect.objectContaining({ gym_id: 'gym_22' }),
    ]);
  });
});
