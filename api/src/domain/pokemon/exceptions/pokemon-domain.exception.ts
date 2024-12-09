export class PokemonDomainException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PokemonDomainException';
  }
}