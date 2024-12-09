export class PokemonInfrastructureException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PokemonInfrastructureException';
  }
}
