import { GetPokemonByIdUseCase } from '../../../src/application/pokemon/use-cases/get-pokemon-by-id.use-case';
import { Pokemon } from '../../../src/domain/pokemon/entities/pokemon.entity';

describe('GetPokemonByIdUseCase', () => {
  const mockRepository = {
    getPokemonById: jest.fn(),
  };

  const useCase = new GetPokemonByIdUseCase(mockRepository as any);

  it('should return a single pokemon by id', async () => {
    const mockPokemon = new Pokemon(1, 'Bulbasaur', '', ['Grass'], 6.9, 0.7, ['Overgrow'], 'desc');
    mockRepository.getPokemonById.mockResolvedValue(mockPokemon);

    const result = await useCase.execute(1);
    expect(result).toEqual(mockPokemon);
    expect(mockRepository.getPokemonById).toHaveBeenCalledWith(1);
  });

  it('should throw an ApplicationException if repository fails', async () => {
    mockRepository.getPokemonById.mockRejectedValue(new Error('Repository error'));
    await expect(useCase.execute(1)).rejects.toThrow('Failed to get pokemon by id: Repository error');
  });
});
