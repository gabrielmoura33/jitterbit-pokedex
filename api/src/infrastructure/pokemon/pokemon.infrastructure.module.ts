import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { PokeApiPokemonRepository } from './repositories/pokeapi-pokemon.repository';
import { PokemonRepository } from 'src/domain/pokemon/repositories/pokemon.repository';
import { PokeApiPokemonService } from './services/pokeapi-pokemon.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [
    PokeApiPokemonService,
    {
      provide: PokemonRepository,
      useClass: PokeApiPokemonRepository,
    },
  ],
  exports: [
    PokemonRepository
  ]
})
export class PokemonInfrastructureModule {}
