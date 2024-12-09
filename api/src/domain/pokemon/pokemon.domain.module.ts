import { Module } from '@nestjs/common';
import { PokemonRepository } from './repositories/pokemon.repository';

@Module({
  providers: [],
  exports: [],
})
export class PokemonDomainModule {}
