import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import pokeapiConfig from './config/pokeapi.config';
import { PokemonInfrastructureModule } from './infrastructure/pokemon/pokemon.infrastructure.module';
import { PokemonApplicationModule } from './application/pokemon/pokemon.application.module';
import { PokemonDomainModule } from './domain/pokemon/pokemon.domain.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [pokeapiConfig],
    }),
    PokemonDomainModule,
    PokemonApplicationModule,
    PokemonInfrastructureModule,
  ],
})
export class AppModule {}