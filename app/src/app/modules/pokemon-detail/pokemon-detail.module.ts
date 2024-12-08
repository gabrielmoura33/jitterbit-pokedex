import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailPage } from './pokemon-detail.page';
import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PokemonDetailRoutingModule
  ],
  declarations: [PokemonDetailPage],

})
export class PokemonDetailModule { }
