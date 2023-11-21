import {describe, beforeEach, it, expect } from 'vitest';
import { hash } from 'bcryptjs';

import { OrgRepository } from '@/repositories/org.repository';
import { PetRepository } from '@/repositories/pet.repository';
import { InMemoryOrgRepository } from '@/repositories/in-memory/in-memory-org-repository';
import { InMemoryPetRepository } from '@/repositories/in-memory/in-memory-pet-repository';

import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { GetPetProfileUseCase } from './get-pet-profile';

let petRepository: PetRepository;
let orgRepository: OrgRepository;
let sut: GetPetProfileUseCase;

describe('Create Pet UseCase', () => {
	beforeEach(() => {  
		petRepository = new InMemoryPetRepository();
		orgRepository = new InMemoryOrgRepository();
		sut = new GetPetProfileUseCase(petRepository);
	});

	it('should be able to get pet profile', async () => {
		const org = await orgRepository.create({
			name: 'Org JS', 
			responsible: 'John Doe', 
			email: 'johndoe@exemple.com', 
			password_hash: await hash('123456', 6), 
			address: 'street', 
			city: 'city', 
			postal_code: '00000-000'
		});

		const petCreated = await petRepository.create({
			name: 'Luke', 
			description: 'Dog carinhoso', 
			age: 'PUPPIE', 
			size: 'MEDIUM', 
			org_id: org.id, 
		});

		const { pet } = await sut.execute({ petId: petCreated.id });

		expect(pet.id).toEqual(expect.any(String));
		expect(pet.name).toEqual('Luke');
		expect(pet.description).toEqual('Dog carinhoso');
		expect(pet.age).toEqual('PUPPIE');
		expect(pet.size).toEqual('MEDIUM');
	});



	it('should be able to create a pet', async () => {
		const promisePet = sut.execute({ petId: 'wrong_pet_id' });
		expect(promisePet).rejects.toBeInstanceOf(ResourceNotFoundError);
	});
});