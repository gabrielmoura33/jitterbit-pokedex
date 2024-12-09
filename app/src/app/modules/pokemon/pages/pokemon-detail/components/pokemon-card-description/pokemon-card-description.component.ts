import { Component, Input } from '@angular/core';
import { textTypeClass } from '../../../../../../utils/type-classes';

@Component({
  selector: 'app-pokemon-card-description',
  templateUrl: './pokemon-card-description.component.html',
  styleUrls: ['./pokemon-card-description.component.scss'],
})
export class PokemonCardDescriptionComponent {
  @Input() pokemonDetails: any;

  getTypeClass(): string {
    const primaryType = this.pokemonDetails?.types?.[0]?.name || 'normal';
    return textTypeClass[primaryType] || 'text-type-normal';
  }
}
