import { expect, describe, it, beforeEach, vi, afterEach } from 'vitest';

import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository';
import { CheckInUseCase } from './check-in';
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';
import { MaxDistanceError } from './errors/max-distance-error';
import { MaxNumberOfCheckInsError } from './errors/max-number-of-check-ins-error';

describe('Check In Use Case', () => {
  let checkInRepository: InMemoryCheckInsRepository;
  let gymsRepository: InMemoryGymsRepository;
  let sut: CheckInUseCase;

  beforeEach(async () => {
    checkInRepository = new InMemoryCheckInsRepository();
    gymsRepository = new InMemoryGymsRepository();
    sut = new CheckInUseCase(checkInRepository, gymsRepository);

    await gymsRepository.create({
      id: 'gym-id',
      title: 'JavaScript Gym',
      description: 'JavaScript',
      phone: '',
      latitude: -27.2092052,
      longitude: -49.6401091,
    });

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('Should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-id',
      userId: 'user-id',
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    expect(checkIn.id).toEqual(expect.any(String));
  });

  it('Should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0));

    await sut.execute({
      gymId: 'gym-id',
      userId: 'user-id',
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    const promiseTwiceCheckIn = sut.execute({
      gymId: 'gym-id',
      userId: 'user-id',
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    expect(promiseTwiceCheckIn).rejects.toBeInstanceOf(
      MaxNumberOfCheckInsError
    );
  });

  it('Should not be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0));

    await sut.execute({
      gymId: 'gym-id',
      userId: 'user-id',
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0));
    const promiseTwiceCheckIn = sut.execute({
      gymId: 'gym-id',
      userId: 'user-id',
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    expect(promiseTwiceCheckIn).resolves.toBeTruthy();
  });

  it('Should not be able to check in on distance gym', async () => {
    await gymsRepository.create({
      id: 'gym-id-2',
      title: 'JavaScript Gym',
      description: 'JavaScript',
      phone: '',
      latitude: -27.0747279,
      longitude: -49.4889672,
    });

    const promiseCreateCheckIn = sut.execute({
      gymId: 'gym-id-2',
      userId: 'user-id',
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    });

    expect(promiseCreateCheckIn).rejects.toBeInstanceOf(MaxDistanceError);
  });
});
