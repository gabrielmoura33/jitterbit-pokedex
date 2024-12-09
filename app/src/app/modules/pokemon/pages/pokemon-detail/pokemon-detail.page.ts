import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import _ from 'lodash';
import { typeClass } from '../../../../utils/type-classes';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  pokemonId!: string;
  pokemonDetails: any;
  pokemonImage: string = '';
  tailwindClass: string = 'bg-grayscale-background';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.pokemonId = params.get('id')!;
      if (this.pokemonId) {
        this.fetchPokemonDetails(this.pokemonId);
      }
    });
  }

  async fetchPokemonDetails(id: string) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      this.pokemonDetails = response.data;

      const primaryType = _.get(this.pokemonDetails, 'types[0].type.name', 'normal');

      this.tailwindClass = typeClass[primaryType] || 'bg-type-normal';

      this.pokemonImage = _.get(
        this.pokemonDetails,
        'sprites.other["official-artwork"].front_default',
        ''
      );
    } catch (error) {
      console.error('Erro ao buscar os detalhes do Pokémon:', error);
    }
  }
}
