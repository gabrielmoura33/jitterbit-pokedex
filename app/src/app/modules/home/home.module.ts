import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule, SharedModule],
  declarations: [HomePage, PokemonListComponent, PokemonCardComponent],
})
export class HomeModule {}
