import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPage } from './pages/pokemon/pokemon.page';
import { PokemonDetailPage } from './pages/pokemon-detail/pokemon-detail.page';

const routes: Routes = [
  { path: '', component: PokemonPage },
  { path: ':id', component: PokemonDetailPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
