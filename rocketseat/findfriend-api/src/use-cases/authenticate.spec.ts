import { InMemoryOrgRepository } from '@/repositories/in-memory/in-memory-org-repository';
import { OrgRepository } from '@/repositories/org.repository';
import { beforeEach, describe, expect, it } from 'vitest';
import { AuthenticateUseCase } from './authenticate';
import { hash } from 'bcryptjs';
import { InvalidCredentialsError } from './errors/invalid-credentials-error';

let orgRepository: OrgRepository;
let sut: AuthenticateUseCase;

describe('Create Authenticate UseCase', () => {
	beforeEach(() => {  
		orgRepository = new InMemoryOrgRepository();
		sut = new AuthenticateUseCase(orgRepository);
	});

	it('should be able authenticate in org', async () => {
		await orgRepository.create({
			name: 'Org JS', 
			responsible: 'John Doe', 
			email: 'johndoe@exemple.com', 
			password_hash: await hash('123456', 6), 
			address: 'street', 
			city: 'city', 
			postal_code: '00000-000'
		});

		const { org } = await sut.execute({
			email: 'johndoe@exemple.com',
			password: '123456'
		});

		expect(org.id).toEqual(expect.any(String));
		expect(org.name).toEqual('Org JS');
		expect(org.responsible).toEqual('John Doe');
	});

	it('should not be able authenticate in org if password is wrong', async () => {
		await orgRepository.create({
			name: 'Org JS', 
			responsible: 'John Doe', 
			email: 'johndoe@exemple.com', 
			password_hash: await hash('123456', 6), 
			address: 'street', 
			city: 'city', 
			postal_code: '00000-000'
		});

		const promiseOrg = sut.execute({
			email: 'johndoe@exemple.com',
			password: 'wrong_password'
		});

		expect(promiseOrg).rejects.toBeInstanceOf(InvalidCredentialsError);
	});

	it('should not be able authenticate in org if do not exist', async () => {
		const promiseOrg = sut.execute({
			email: 'johndoe@exemple.com',
			password: 'wrong_password'
		});

		expect(promiseOrg).rejects.toBeInstanceOf(InvalidCredentialsError);
	});
});