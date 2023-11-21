import { compare } from 'bcryptjs';
import { OrgRepository } from '@/repositories/org.repository';
import { InvalidCredentialsError } from './errors/invalid-credentials-error';

type CreateOrgUseCaseRequest = { 
  email: string, 
  password: string
} 

export class AuthenticateUseCase {
	private readonly orgRepository: OrgRepository;

	constructor(orgRepository: OrgRepository){
		this.orgRepository = orgRepository;
	}

	async execute({ email, password }: CreateOrgUseCaseRequest) {
		const org = await this.orgRepository.findByEmail(email);
		if(!org) {
			throw new InvalidCredentialsError();
		}

		const doesPasswordMatch = await compare(password, org.password_hash);
		if(!doesPasswordMatch){
			throw new InvalidCredentialsError();
		}

		return  { org };
	}
}