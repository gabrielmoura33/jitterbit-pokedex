import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  declarations: [HomePage, PokemonListComponent, PokemonDetailComponent],
})
export class HomeModule {}
