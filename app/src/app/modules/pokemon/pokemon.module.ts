import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/shared.module';
import { PokemonListComponent } from './pages/pokemon/components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pages/pokemon/components/pokemon-card/pokemon-card.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonPage } from './pages/pokemon/pokemon.page';
import { PokemonDetailPage } from './pages/pokemon-detail/pokemon-detail.page';
import { PokemonCardBadgeComponent } from './pages/pokemon-detail/components/pokemon-card-badge/pokemon-card-badge.component';
import { PokemonCardDescriptionComponent } from './pages/pokemon-detail/components/pokemon-card-description/pokemon-card-description.component';
import { PokemonCardInfoComponent } from './pages/pokemon-detail/components/pokemon-card-info/pokemon-card-info.component';

@NgModule({
  imports: [CommonModule, PokemonRoutingModule, FormsModule, SharedModule],
  declarations: [
    PokemonPage,
    PokemonDetailPage,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonCardBadgeComponent,
    PokemonCardDescriptionComponent,
    PokemonCardInfoComponent
  ],
})
export class PokemonModule {}
