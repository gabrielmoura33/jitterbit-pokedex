import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-info',
  templateUrl: './pokemon-card-info.component.html',
  styleUrls: ['./pokemon-card-info.component.scss'],
})
export class PokemonCardInfoComponent {
  @Input() pokemonDetails: any;

  get weight(): string {
    return `${(this.pokemonDetails?.weight.toFixed(2) || 0)} kg`;
  }

  get height(): string {
    return `${(this.pokemonDetails?.height.toFixed(2) || 0)} m`;
  }

  get abilities(): string[] {
    return this.pokemonDetails?.abilities?.map((ability: any) => ability) || [];
  }
}
