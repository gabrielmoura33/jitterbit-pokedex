import { PokeApiPokemonRepository } from '../../../src/infrastructure/pokemon/repositories/pokeapi-pokemon.repository';
import { PokeApiPokemonService } from '../../../src/infrastructure/pokemon/services/pokeapi-pokemon.service';
import { Pokemon } from '../../../src/domain/pokemon/entities/pokemon.entity';

describe('PokeApiPokemonRepository', () => {
  let repository: PokeApiPokemonRepository;
  let service: PokeApiPokemonService;

  beforeEach(() => {
    service = {} as any;
    service.fetchPokemons = jest.fn();
    service.fetchPokemonDetailsByUrl = jest.fn();
    service.fetchPokemonById = jest.fn();
    service.fetchPokemonSpeciesById = jest.fn();

    repository = new PokeApiPokemonRepository(service);
  });

  it('should get pokemons', async () => {
    (service.fetchPokemons as jest.Mock).mockResolvedValue({ results: [
      { name: 'bulbasaur', url: 'mock_url' }
    ]});
    (service.fetchPokemonDetailsByUrl as jest.Mock).mockResolvedValue({
      id: 1,
      name: 'bulbasaur',
      sprites: { other: { 'official-artwork': { front_default: 'img_url' } } },
      types: [{ type: { name: 'grass' } }],
      weight: 69,
      height: 7,
      abilities: [{ ability: { name: 'overgrow' } }]
    });

    const result = await repository.getPokemons(20, 0);
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('bulbasaur');
  });

  it('should get a pokemon by id', async () => {
    (service.fetchPokemonById as jest.Mock).mockResolvedValue({
      id: 1,
      name: 'bulbasaur',
      sprites: { other: { 'official-artwork': { front_default: 'img_url' } } },
      types: [{ type: { name: 'grass' } }],
      weight: 69,
      height: 7,
      abilities: [{ ability: { name: 'overgrow' } }]
    });
    (service.fetchPokemonSpeciesById as jest.Mock).mockResolvedValue({
      flavor_text_entries: [
        { language: { name: 'en' }, flavor_text: 'A seed Pokémon that grows a plant on its back.' }
      ]
    });

    const result = await repository.getPokemonById(1);
    expect(result.id).toBe(1);
    expect(result.name).toBe('bulbasaur');
    expect(result.description).toBe('A seed Pokémon that grows a plant on its back.');
  });
});
