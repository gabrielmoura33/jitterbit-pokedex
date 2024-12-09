import { Pokemon } from '../entities/pokemon.entity';

export abstract class PokemonRepository {
  abstract getPokemons(limit: number, offset: number, search?: string): Promise<Pokemon[]>;
  abstract getPokemonById(id: number): Promise<Pokemon>;
}
