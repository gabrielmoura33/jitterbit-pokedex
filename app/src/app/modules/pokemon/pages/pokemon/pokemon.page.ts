import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../../../core/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  pokemons$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);
  searchTerm$ = new Subject<string>();
  limit = 25;
  offset = 0;
  loading = false;
  allLoaded = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.searchTerm$
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => {
        if (term) {
          this.searchPokemons(term);
        } else {
          this.resetPokemons();
        }
      });

    this.loadPokemons();
  }

  handleSearch(term: string): void {
    this.searchTerm$.next(term);
  }

  searchPokemons(term: string): void {
    this.loading = true;
    this.pokemonService.searchPokemon(term).subscribe(
      (pokemons) => {
        this.pokemons$.next(pokemons);
        this.loading = false;
        this.allLoaded = true;
      },
      (error) => {
        console.error('Erro ao buscar Pokémons:', error);
        this.loading = false;
      }
    );
  }

  resetPokemons(): void {
    this.offset = 0;
    this.pokemons$.next([]);
    this.allLoaded = false;
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.loading = true;
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe(
      (pokemons) => {
        if (pokemons.length === 0) {
          this.allLoaded = true;
        }
        const current = this.pokemons$.getValue();
        this.pokemons$.next([...current, ...pokemons]);
        this.loading = false;
      },
      (error) => {
        console.error('Erro ao carregar Pokémons:', error);
        this.loading = false;
      }
    );
  }

  loadMore(): void {
    this.offset += this.limit;
    this.loadPokemons();
  }
}
