import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export class PokemonDetailPage implements OnInit {
  pokemonId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.pokemonId = params.get('id')!;
    });
  }
}
