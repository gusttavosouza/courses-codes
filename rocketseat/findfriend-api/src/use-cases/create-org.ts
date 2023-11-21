import { hash } from 'bcryptjs';
import { OrgRepository } from '@/repositories/org.repository';
import { OrgAlreadyExistError } from './errors/org-already-exist-error';

type CreateOrgUseCaseRequest = {
  name: string, 
  responsible: string, 
  email: string, 
  password: string
  address: string,
  city: string,
  postal_code: string,
} 

export class CreateOrgUseCase {
	private readonly orgRepository: OrgRepository;

	constructor(orgRepository: OrgRepository){
		this.orgRepository = orgRepository;
	}

	async execute({ name, responsible, email, password, address, city, postal_code}: CreateOrgUseCaseRequest) {
		const password_hash = await hash(password, 6);

		const orgWithSameName = await this.orgRepository.findByName(name);
		const orgWithSameEmail = await this.orgRepository.findByEmail(email);

		if(orgWithSameName || orgWithSameEmail){
			throw new OrgAlreadyExistError();
		}

		const org = await this.orgRepository.create({
			name, 
			responsible, 
			email, 
			password_hash, 
			address, 
			city, 
			postal_code
		});

		return  { org };
	}
}