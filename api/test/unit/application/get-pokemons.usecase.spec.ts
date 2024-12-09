


import { GetPokemonsUseCase } from '../../../src/application/pokemon/use-cases/get-pokemons.use-case';
import { Pokemon } from '../../../src/domain/pokemon/entities/pokemon.entity';

describe('GetPokemonsUseCase', () => {
  const mockRepository = {
    getPokemons: jest.fn(),
  };

  const useCase = new GetPokemonsUseCase(mockRepository as any);

  it('should return a list of pokemons', async () => {
    const mockPokemons = [
      new Pokemon(1, 'Bulbasaur', '', ['Grass'], 6.9, 0.7, ['Overgrow'], 'desc'),
    ];
    mockRepository.getPokemons.mockResolvedValue(mockPokemons);

    const result = await useCase.execute(20, 0);
    expect(result).toEqual(mockPokemons);
    expect(mockRepository.getPokemons).toHaveBeenCalledWith(20, 0, undefined);
  });

  it('should handle errors by throwing ApplicationException', async () => {
    mockRepository.getPokemons.mockRejectedValue(new Error('Repository error'));
    await expect(useCase.execute(20, 0)).rejects.toThrow('Failed to get pokemons: Repository error');
  });
});
