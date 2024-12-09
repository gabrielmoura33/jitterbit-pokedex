import { Component, Input } from '@angular/core';
import { typeClass } from '../../../../../../utils/type-classes';

@Component({
  selector: 'app-pokemon-card-badge',
  templateUrl: './pokemon-card-badge.component.html',
  styleUrls: ['./pokemon-card-badge.component.scss']
})
export class PokemonCardBadgeComponent {
  @Input() pokemonDetails: any;

  getTypeClass(type: string): string {
    return typeClass[type] || 'bg-type-normal';
  }
}
