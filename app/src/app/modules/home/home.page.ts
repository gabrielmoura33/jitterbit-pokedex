import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from './models/pokemon.model';
import { PokemonService } from '../../core/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);
  limit = 20;
  offset = 0;
  searchTerm = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe((data) => {
      const current = this.pokemons$.getValue();
      this.pokemons$.next([...current, ...data]);
    });
  }

  loadMore() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  search() {
    if (this.searchTerm.trim()) {
      this.pokemonService.searchPokemon(this.searchTerm).subscribe((data) => {
        this.pokemons$.next(data);
      });
    } else {
      this.offset = 0;
      this.pokemons$.next([]);
      this.loadPokemons();
    }
  }
}
