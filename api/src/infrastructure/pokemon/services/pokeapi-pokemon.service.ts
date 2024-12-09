import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { PokemonInfrastructureException } from '../exceptions/pokemon-infrastructure.exception';

@Injectable()
export class PokeApiPokemonService {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('pokeapi.baseUrl') || "";
    if (!this.baseUrl) {
      throw new PokemonInfrastructureException('PokeAPI base URL is not configured.');
    }
  }

  async fetchPokemons(limit: number, offset: number): Promise<any> {
    try {
      const url = `${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`;
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error: any) {
      throw new PokemonInfrastructureException('Error fetching pokemons: ' + error.message);
    }
  }

  async fetchPokemonDetailsByUrl(url: string): Promise<any> {
    try {
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error: any) {
      throw new PokemonInfrastructureException('Error fetching pokemon details by URL: ' + error.message);
    }
  }

  async fetchPokemonById(id: number): Promise<any> {
    try {
      const url = `${this.baseUrl}/pokemon/${id}`;
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error: any) {
      throw new PokemonInfrastructureException('Error fetching pokemon by ID: ' + error.message);
    }
  }

  async fetchPokemonSpeciesById(id: number): Promise<any> {
    try {
      const url = `${this.baseUrl}/pokemon-species/${id}`;
      const response = await this.httpService.axiosRef.get(url);
      return response.data;
    } catch (error: any) {
      throw new PokemonInfrastructureException('Error fetching pokemon species: ' + error.message);
    }
  }
}
