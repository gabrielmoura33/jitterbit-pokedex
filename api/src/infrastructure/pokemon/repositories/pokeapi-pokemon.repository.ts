import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '../../../domain/pokemon/repositories/pokemon.repository';
import { Pokemon } from '../../../domain/pokemon/entities/pokemon.entity';
import { PokeApiPokemonService } from '../services/pokeapi-pokemon.service';
import { PokemonInfrastructureException } from '../exceptions/pokemon-infrastructure.exception';

@Injectable()
export class PokeApiPokemonRepository implements PokemonRepository {
  constructor(private readonly pokeApiService: PokeApiPokemonService) {}

  async getPokemons(limit: number, offset: number, search?: string): Promise<Pokemon[]> {
    try {
      if (search) {
        const allData = await this.pokeApiService.fetchPokemons(10000, 0);
        const filteredResults = allData.results.filter((r: any) =>
          r.name.toLowerCase().includes(search.toLowerCase()),
        );

        const pokemons = await Promise.all(
          filteredResults.map(async (result: any) => {
            const details = await this.pokeApiService.fetchPokemonDetailsByUrl(result.url);
            return this.transformPokemonData(details, 'Description not available');
          }),
        );
        return pokemons;
      } else {
        const data = await this.pokeApiService.fetchPokemons(limit, offset);
        const pokemons = await Promise.all(
          data.results.map(async (result: any) => {
            const details = await this.pokeApiService.fetchPokemonDetailsByUrl(result.url);
            return this.transformPokemonData(details, 'Description not available');
          }),
        );
        return pokemons;
      }
    } catch (error: any) {
      throw new PokemonInfrastructureException('Error in getPokemons: ' + error.message);
    }
  }

  async getPokemonById(id: number): Promise<Pokemon> {
    try {
      const [pokemonData, speciesData] = await Promise.all([
        this.pokeApiService.fetchPokemonById(id),
        this.pokeApiService.fetchPokemonSpeciesById(id),
      ]);

      const description = this.extractDescription(speciesData);
      return this.transformPokemonData(pokemonData, description);
    } catch (error: any) {
      throw new PokemonInfrastructureException('Error in getPokemonById: ' + error.message);
    }
  }

  private transformPokemonData(data: any, description: string): Pokemon {
    const pokemon = new Pokemon(
      data.id,
      data.name,
      data.sprites?.other['official-artwork']?.front_default || '',
      data.types.map((type: any) => type.type.name),
      parseFloat((data.weight / 10).toFixed(2)),
      parseFloat((data.height / 10).toFixed(2)),
      data.abilities.map((ability: any) => ability.ability.name),
      description,
      `https://play.pokemonshowdown.com/audio/cries/${data.name.toLowerCase()}.mp3`,
    );
  
    pokemon.description = description || '';
  
    return pokemon;
  }
  

  private extractDescription(speciesData: any): string {
    const flavorTextEntry = speciesData.flavor_text_entries.find(
      (entry: any) => entry.language.name === 'en',
    );
    return flavorTextEntry
      ? flavorTextEntry.flavor_text.replace(/[\n\f]/g, ' ')
      : '';
  }
}
