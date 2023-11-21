import { Org, Prisma,} from '@prisma/client';
import { OrgRepository } from '../org.repository';

export class PrismaOrgRepository implements OrgRepository {
	public async create(data: Prisma.OrgCreateInput): Promise<Org> {
		console.log(data);
		return {} as Org;
	}

	public async findByEmail(email: string): Promise<Org | null> {
		console.log(email);
		return null;
	}
	
	public async findByName(name: string): Promise<Org | null> {
		console.log(name);
		return null;
	}

	public async findById(id: string): Promise<Org | null> {
		console.log(id);
		return null;
	}
}