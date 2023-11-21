import { PetRepository } from '@/repositories/pet.repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

interface GetPetProfileUseCaseRequest {
  petId: string;
}
export class GetPetProfileUseCase {
	private petRepository: PetRepository;

	constructor(petRepository: PetRepository) {
		this.petRepository = petRepository;
	}

	async execute({ petId }: GetPetProfileUseCaseRequest) {
		const pet = await this.petRepository.findById(petId);
		if (!pet) {
			throw new ResourceNotFoundError();
		}

		return { pet };
	}
}