export class PokemonApplicationException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PokemonApplicationException';
  }
}
