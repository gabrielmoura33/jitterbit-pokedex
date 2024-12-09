import { Injectable } from '@nestjs/common';
import { Pokemon } from '../../../domain/pokemon/entities/pokemon.entity';
import { PokemonRepository } from '../../../domain/pokemon/repositories/pokemon.repository';
import { PokemonApplicationException } from '../exceptions/pokemon-application.exception';

@Injectable()
export class GetPokemonsUseCase {
  constructor(
    private readonly pokemonRepository: PokemonRepository,
  ) {}

  async execute(limit: number, offset: number, search?: string): Promise<Pokemon[]> {
    try {
      return await this.pokemonRepository.getPokemons(limit, offset, search);
    } catch (err: any) {
      throw new PokemonApplicationException('Failed to get pokemons: ' + err.message);
    }
  }
}
