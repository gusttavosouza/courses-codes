import { Pet, Prisma,} from '@prisma/client';
import { PetRepository } from '../pet.repository';
import { randomUUID } from 'crypto';

export class InMemoryPetRepository implements PetRepository {

	public pets: Pet[] = [];

	public async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
		const pet = {
			id: randomUUID(),
			name: data.name,
			description: data.description ?? null,
			age: data.age,
			size: data.size,
			created_at: new Date(),
			org_id: data.org_id
		};

		this.pets.push(pet);

		return pet;
	}

	public async findById(petId: string): Promise<Pet | null> {
		const pet = await this.pets.find((pet) => pet.id === petId);
		if(!pet) {
			return null;
		}
		return pet;
	}
  
}