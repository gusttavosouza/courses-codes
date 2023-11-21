import {describe, beforeEach, it, expect } from 'vitest';
import { hash } from 'bcryptjs';

import { OrgRepository } from '@/repositories/org.repository';
import { PetRepository } from '@/repositories/pet.repository';
import { InMemoryOrgRepository } from '@/repositories/in-memory/in-memory-org-repository';
import { InMemoryPetRepository } from '@/repositories/in-memory/in-memory-pet-repository';

import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { CreatePetUseCase } from './create-pet';

let petRepository: PetRepository;
let orgRepository: OrgRepository;
let sut: CreatePetUseCase;

describe('Create Pet UseCase', () => {
	beforeEach(() => {  
		petRepository = new InMemoryPetRepository();
		orgRepository = new InMemoryOrgRepository();
		sut = new CreatePetUseCase(petRepository, orgRepository);
	});

	it('should be able to create a pet', async () => {
		const org = await orgRepository.create({
			name: 'Org JS', 
			responsible: 'John Doe', 
			email: 'johndoe@exemple.com', 
			password_hash: await hash('123456', 6), 
			address: 'street', 
			city: 'city', 
			postal_code: '00000-000'
		});


		const { pet } = await sut.execute({
			name: 'Luke', 
			description: 'Dog carinhoso', 
			age: 'PUPPIE', 
			size: 'MEDIUM', 
			orgId: org.id, 
		});

		expect(pet.id).toEqual(expect.any(String));
		expect(pet.name).toEqual('Luke');
	});



	it('should be able to create a pet', async () => {
		const promisePet = sut.execute({
			name: 'Luke', 
			description: 'Dog carinhoso', 
			age: 'PUPPIE', 
			size: 'MEDIUM', 
			orgId: 'wrong_org_id', 
		});

		expect(promisePet).rejects.toBeInstanceOf(ResourceNotFoundError);
	});
});