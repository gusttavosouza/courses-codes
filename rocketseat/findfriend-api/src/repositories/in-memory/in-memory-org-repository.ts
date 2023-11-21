import { Org, Prisma,} from '@prisma/client';
import { OrgRepository } from '../org.repository';
import { randomUUID } from 'crypto';

export class InMemoryOrgRepository implements OrgRepository {
	public items: Org[] = [];

	public async create(data: Prisma.OrgCreateInput): Promise<Org> {
		const org = {
			id: randomUUID(),
			name: data.name,
			responsible: data.responsible,
			email: data.email,
			password_hash: data.password_hash,
			address: data.address,
			city: data.city,
			postal_code: data.postal_code,
			created_at: new Date()
		};

		this.items.push(org);

		return org;
	}

	public async findByEmail(email: string): Promise<Org | null> {
		const org = await this.items.find((org) => org.email === email);
		if(!org) {
			return null;
		}
		return org;
	}

	public async findByName(name: string): Promise<Org | null> {
		const org = await this.items.find((org) => org.name === name);
		if(!org) {
			return null;
		}
		return org;
	}

	public async findById(id: string): Promise<Org | null> {
		const org = await this.items.find((org) => org.id === id);
		if(!org) {
			return null;
		}
		return org;
	}
}