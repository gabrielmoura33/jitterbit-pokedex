import { Controller, Get, Query, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { GetPokemonsUseCase } from 'src/application/pokemon/use-cases/get-pokemons.use-case';
import { GetPokemonByIdUseCase } from 'src/application/pokemon/use-cases/get-pokemon-by-id.use-case';

@Controller('pokemons')
export class PokemonController {
  constructor(
    private readonly getPokemonsUseCase: GetPokemonsUseCase,
    private readonly getPokemonByIdUseCase: GetPokemonByIdUseCase,
  ) {}

  @Get()
  async getPokemons(
    @Query('limit') limit: string = '20',
    @Query('offset') offset: string = '0',
    @Query('search') search?: string,
  ) {
    try {
      const pokemons = await this.getPokemonsUseCase.execute(
        parseInt(limit, 10),
        parseInt(offset, 10),
        search,
      );
      return pokemons.map((pokemon) => pokemon.toPlainObject());
    } catch (error) {
      throw new HttpException('Failed to fetch Pokemons', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async getPokemonById(@Param('id', ParseIntPipe) id: number) {
    try {
      const pokemon = await this.getPokemonByIdUseCase.execute(id);
      return pokemon.toPlainObject();
    } catch (error) {
      throw new HttpException('Failed to fetch Pokémon details', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
