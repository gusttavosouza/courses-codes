import { expect, describe, it, beforeEach, afterEach, vi } from 'vitest';

import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository';
import { ValidateCheckInUseCase } from './validate-check-in';

describe('Validade Check In Use Case', () => {
  let checkInRepository: InMemoryCheckInsRepository;
  let sut: ValidateCheckInUseCase;

  beforeEach(async () => {
    checkInRepository = new InMemoryCheckInsRepository();
    sut = new ValidateCheckInUseCase(checkInRepository);

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('Should be able to validate the check-in', async () => {
    const createdCheckIn = await checkInRepository.create({
      gym_id: 'gym_01',
      user_id: 'user_01',
    });

    const { checkIn } = await sut.execute({
      checkInId: createdCheckIn.id,
    });

    expect(checkIn.validated_at).toEqual(expect.any(Date));
    expect(checkInRepository.items[0].validated_at).toEqual(expect.any(Date));
  });

  it('Should not be able to validate  an inexistent check-int', async () => {
    const checkInPromise = sut.execute({
      checkInId: 'inexistent-check-int-id',
    });

    expect(checkInPromise).rejects.toBeInstanceOf(Error);
  });

  it('Should not be able to validade the check-in after 20 minutes of its creation', async () => {
    vi.setSystemTime(new Date(2023, 0, 1, 13, 40));

    const createdCheckIn = await checkInRepository.create({
      gym_id: 'gym_01',
      user_id: 'user_01',
    });

    const twentyOneMinutesInMs = 1000 * 60 * 21;
    vi.advanceTimersByTime(twentyOneMinutesInMs);

    const promiseCheckIn = sut.execute({
      checkInId: createdCheckIn.id,
    });

    expect(promiseCheckIn).rejects.toBeInstanceOf(Error);
  });
});
