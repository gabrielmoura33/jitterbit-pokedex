import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  constructor(private router: Router) {}

  redirectToDetails(): void {
    this.router.navigate([`/${this.pokemon.id}`]);
  }
}
