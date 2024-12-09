import { Module } from '@nestjs/common';
import { GetPokemonsUseCase } from './use-cases/get-pokemons.use-case';
import { GetPokemonByIdUseCase } from './use-cases/get-pokemon-by-id.use-case';
import { PokemonInfrastructureModule } from '../../infrastructure/pokemon/pokemon.infrastructure.module';
import { HttpModule } from '@nestjs/axios';
import { PokemonController } from './controllers/pokemon.controller';

@Module({
  controllers: [PokemonController],
  imports: [PokemonInfrastructureModule, HttpModule],
  providers: [
    GetPokemonsUseCase,
    GetPokemonByIdUseCase,
  ],
  exports: [
    GetPokemonsUseCase,
    GetPokemonByIdUseCase,
  ],
})
export class PokemonApplicationModule {}
