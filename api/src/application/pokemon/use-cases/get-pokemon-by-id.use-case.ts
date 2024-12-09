import { Injectable, Inject } from '@nestjs/common';
import { Pokemon } from '../../../domain/pokemon/entities/pokemon.entity';
import { PokemonRepository } from '../../../domain/pokemon/repositories/pokemon.repository';
import { PokemonApplicationException } from '../exceptions/pokemon-application.exception';

@Injectable()
export class GetPokemonByIdUseCase {
  constructor(
    private readonly pokemonRepository: PokemonRepository,
  ) {}

  async execute(id: number): Promise<Pokemon> {
    try {
      return await this.pokemonRepository.getPokemonById(id);
    } catch (err: any) {
      throw new PokemonApplicationException('Failed to get pokemon by id: ' + err.message);
    }
  }
}
