import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Pokemon } from '../../modules/pokemon/models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Obtém uma lista de Pokémons com paginação.
   * @param limit Número de itens por página.
   * @param offset Índice inicial da listagem.
   * @returns Observable de uma lista de Pokémons.
   */
  getPokemons(limit: number = 20, offset: number = 0): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/pokemons?limit=${limit}&offset=${offset}`);
  }

  /**
   * Busca Pokémons pelo nome.
   * @param name Nome do Pokémon para busca.
   * @returns Observable de uma lista de Pokémons.
   */
  searchPokemon(name: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/pokemons?search=${name}`);
  }

  /**
   * Obtém os detalhes de um Pokémon pelo ID.
   * @param id ID do Pokémon.
   * @returns Observable do objeto Pokémon com todos os detalhes.
   */
  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemons/${id}`);
  }
}
