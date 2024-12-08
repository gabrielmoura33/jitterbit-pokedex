import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonPage } from './pages/pokemon/pokemon.page';

@NgModule({
  imports: [CommonModule, PokemonRoutingModule, FormsModule, SharedModule],
  declarations: [PokemonPage, PokemonListComponent, PokemonCardComponent],
})
export class PokemonModule {}
