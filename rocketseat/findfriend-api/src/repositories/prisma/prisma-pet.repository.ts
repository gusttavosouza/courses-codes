import { Pet, Prisma,} from '@prisma/client';
import { PetRepository } from '../pet.repository';

export class PrismaPetRepository implements PetRepository {
	public async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
		console.log(data);
		return {} as Pet;
	}

	public async findById(id: string): Promise<Pet | null> {
		console.log(id);
		return null;
	}
  
}