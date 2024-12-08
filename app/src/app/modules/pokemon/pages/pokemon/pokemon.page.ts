import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../../../core/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  pokemons$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);
  limit = 20;
  offset = 0;
  searchTerm = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // Mock de Pokémons para teste com imagens do anime
    const mockPokemons: Pokemon[] = [
      {
        id: 1,
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      },
      {
        id: 4,
        name: 'Charmander',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      },
      {
        id: 7,
        name: 'Squirtle',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      },
      {
        id: 25,
        name: 'Pikachu',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      },
      {
        id: 39,
        name: 'Jigglypuff',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
      },
      {
        id: 94,
        name: 'Gengar',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
      },
      {
        id: 133,
        name: 'Eevee',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
      },
      {
        id: 150,
        name: 'Mewtwo',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
      },
      {
        id: 151,
        name: 'Mew',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png',
      },
      {
        id: 143,
        name: 'Snorlax',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
      },
      {
        id: 248,
        name: 'Tyranitar',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png',
      },
      {
        id: 384,
        name: 'Rayquaza',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png',
      },
      {
        id: 248,
        name: 'Tyranitar',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png',
      },
      {
        id: 384,
        name: 'Rayquaza',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png',
      },
      {
        id: 248,
        name: 'Tyranitar',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png',
      },
      {
        id: 384,
        name: 'Rayquaza',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png',
      },
    ];

    // Emitindo os dados mockados no BehaviorSubject
    this.pokemons$.next(mockPokemons);
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

  handleSearch(query: string): void {
    console.log('Search query:', query);
    // Lógica para tratar a busca
  }

}
