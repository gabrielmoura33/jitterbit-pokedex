import { Pokemon } from '../../../src/domain/pokemon/entities/pokemon.entity';

describe('Pokemon Entity', () => {
  it('should create a Pokemon entity with valid properties', () => {
    const pokemon = new Pokemon(
      1,
      'Bulbasaur',
      'https://pokeapi.co/sprites/pokemon/1.png',
      ['Grass', 'Poison'],
      6.9,
      0.7,
      ['Overgrow', 'Chlorophyll'],
      'A seed Pokémon that grows a plant on its back.',
    );

    expect(pokemon.id).toBe(1);
    expect(pokemon.name).toBe('Bulbasaur');
    expect(pokemon.types).toEqual(['Grass', 'Poison']);
    expect(pokemon.weight).toBe(6.9);
    expect(pokemon.description).toBe('A seed Pokémon that grows a plant on its back.');
  });

  it('toPlainObject should return a clean object without underscores', () => {
    const pokemon = new Pokemon(
      3,
      'Venusaur',
      'https://pokeapi.co/sprites/pokemon/3.png',
      ['Grass', 'Poison'],
      100,
      2,
      ['Overgrow', 'Chlorophyll'],
    );

    const plain = pokemon.toPlainObject();
    expect(plain).toEqual({
      id: 3,
      name: 'Venusaur',
      image: 'https://pokeapi.co/sprites/pokemon/3.png',
      types: ['Grass', 'Poison'],
      weight: 100,
      height: 2,
      abilities: ['Overgrow', 'Chlorophyll'],
      sound: 'https://play.pokemonshowdown.com/audio/cries/venusaur.mp3'
    });
  });
});
