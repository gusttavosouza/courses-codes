import { InMemoryOrgRepository } from '@/repositories/in-memory/in-memory-org-repository';
import { CreateOrgUseCase } from './create-org';
import { OrgRepository } from '@/repositories/org.repository';
import {describe, beforeEach, it, expect } from 'vitest';
import { OrgAlreadyExistError } from './errors/org-already-exist-error';

let orgRepository: OrgRepository;
let sut: CreateOrgUseCase;

describe('Create Org UseCase', () => {
	beforeEach(() => {  
		orgRepository = new InMemoryOrgRepository();
		sut = new CreateOrgUseCase(orgRepository);
	});

	it('should be able to create a org', async () => {
		const { org } = await sut.execute({
			name: 'Org JS', 
			responsible: 'John Doe', 
			email: 'johndoe@exemple.com', 
			password: 'password_test', 
			address: 'street tal', 
			city: 'city_exemple', 
			postal_code: '00000-000'
		});

		expect(org.id).toEqual(expect.any(String));
		expect(org.name).toEqual('Org JS');
		expect(org.responsible).toEqual('John Doe');
	});

	it('should not be able to create a org with same name', async () => {
		await sut.execute({
			name: 'Org JS', 
			responsible: 'John Doe', 
			email: 'johndoe@exemple.com', 
			password: 'password_test', 
			address: 'street tal', 
			city: 'city_exemple', 
			postal_code: '00000-000'
		});

		const promiseOrg = sut.execute({
			name: 'Org JS', 
			responsible: 'John Doe', 
			email: 'johndoe2@exemple.com', 
			password: 'password_test', 
			address: 'street tal', 
			city: 'city_exemple', 
			postal_code: '00000-000'
		});

		expect(promiseOrg).rejects.toBeInstanceOf(OrgAlreadyExistError);
	});

	it('should not be able to create a org with same email', async () => {
		await sut.execute({
			name: 'Org JS', 
			responsible: 'John Doe', 
			email: 'johndoe@exemple.com', 
			password: 'password_test', 
			address: 'street tal', 
			city: 'city_exemple', 
			postal_code: '00000-000'
		});

		const promiseOrg = sut.execute({
			name: 'Org Java', 
			responsible: 'John Doe 2', 
			email: 'johndoe@exemple.com', 
			password: 'password_test', 
			address: 'street tal', 
			city: 'city_exemple', 
			postal_code: '00000-000'
		});

		expect(promiseOrg).rejects.toBeInstanceOf(OrgAlreadyExistError);
	});
	
});