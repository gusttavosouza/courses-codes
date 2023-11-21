import { OrgRepository } from '@/repositories/org.repository';
import { PetRepository } from '@/repositories/pet.repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

type Age =   'PUPPIE' | 'ADULT' | 'SENIOR';
type Size =   'SMALL' | 'MEDIUM' | 'BIG';

type CreatePetUseCaseRequest = {
  name: string;
  description: string;
  age: Age;
  size: Size;
  orgId: string;
} 

export class CreatePetUseCase {
	private readonly petRepository: PetRepository;
	private readonly orgRepository: OrgRepository;

	constructor(petRepository: PetRepository, orgRepository: OrgRepository){
		this.petRepository = petRepository;
		this.orgRepository = orgRepository;
	}

	async execute({ name, description, age, size, orgId }: CreatePetUseCaseRequest) {
		const org = await this.orgRepository.findById(orgId);
		if(!org){
			throw new ResourceNotFoundError();
		}

		const pet = await this.petRepository.create({
			name, 
			description, 
			age, 
			size, 
			org_id: orgId
		});

		return  { pet };
	}
}