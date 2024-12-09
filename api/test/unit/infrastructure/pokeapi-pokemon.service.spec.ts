import { PokeApiPokemonService } from '../../../src/infrastructure/pokemon/services/pokeapi-pokemon.service';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { ConfigService } from '@nestjs/config';

describe('PokeApiPokemonService', () => {
  let service: PokeApiPokemonService;
  let httpService: HttpService;
  let configService: ConfigService;

  beforeEach(() => {
    httpService = new HttpService();
    configService = { get: jest.fn().mockReturnValue('https://pokeapi.co/api/v2') } as any;
    service = new PokeApiPokemonService(httpService, configService);
  });

  it('should fetch pokemons', async () => {
    jest.spyOn(httpService.axiosRef, 'get').mockResolvedValue({ data: { results: [] } });
    const result = await service.fetchPokemons(20, 0);
    expect(result).toEqual({ results: [] });
  });

  it('should throw InfrastructureException on error', async () => {
    jest.spyOn(httpService.axiosRef, 'get').mockRejectedValue(new Error('Network Error'));
    await expect(service.fetchPokemons(20, 0)).rejects.toThrow('Error fetching pokemons: Network Error');
  });
});
