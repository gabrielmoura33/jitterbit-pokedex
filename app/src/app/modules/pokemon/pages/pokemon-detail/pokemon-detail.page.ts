import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../../core/services/pokemon.service';
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
  pokemonDescription: string = '';
  tailwindClass: string = 'bg-grayscale-background';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.pokemonId = params.get('id')!;
      if (this.pokemonId) {
        this.fetchPokemonDetails(this.pokemonId);
      }
    });
  }

  /**
   * Busca os detalhes do Pokémon da nossa API e reproduz o som.
   * @param id ID do Pokémon.
   */
  fetchPokemonDetails(id: string): void {
    this.pokemonService.getPokemonById(parseInt(id, 10)).subscribe(
      (details) => {
        this.pokemonDetails = details;
        this.pokemonImage = details.image;
        this.pokemonDescription = details.description;

        const primaryType = details.types?.[0] || 'normal';
        this.tailwindClass = typeClass[primaryType] || 'bg-type-normal';

        // Reproduz o som do Pokémon
        this.playPokemonSound(details.sound);
      },
      (error) => {
        console.error('Erro ao buscar os detalhes do Pokémon:', error);
      }
    );
  }

  /**
   * Reproduz o som do Pokémon.
   * @param soundUrl URL do som.
   */
  playPokemonSound(soundUrl: string): void {
    const audio = new Audio(soundUrl);
    audio.play().catch((error) => {
      console.error('Erro ao reproduzir o som do Pokémon:', error);
    });
  }

  /**
   * Navega de volta para a página inicial.
   */
  goBack(): void {
    this.router.navigate(['/']);
  }
}
