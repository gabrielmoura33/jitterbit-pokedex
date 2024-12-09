# Jitterbit Pokedex API

![Node.js](https://img.shields.io/badge/node.js-18.x-brightgreen.svg)
![NestJS](https://img.shields.io/badge/NestJS-10.x-E0234E.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)
![Jest](https://img.shields.io/badge/Tested_with-Jest-green.svg)
![Axios](https://img.shields.io/badge/Axios-1.x-blue.svg)
![Lint](https://img.shields.io/badge/Code_Style-ESLint-blue.svg)

## Sumário

- [Descrição](#descrição)
- [Arquitetura](#arquitetura)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Testes](#testes)
- [Exemplos de Uso da API](#exemplos-de-uso-da-api)
- [Casos de Uso](#casos-de-uso)
- [Próximos Passos](#próximos-passos)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Descrição

A **Pokedex API** é uma API REST construída com NestJS que fornece informações sobre Pokémons, permitindo pesquisar por lista paginada, aplicar filtros por nome e obter detalhes completos de um Pokémon específico. A API integra-se à [PokeAPI](https://pokeapi.co/) para extrair dados atualizados, transformando-os em um formato coeso e amigável para uso em front-ends ou outros serviços.

## Arquitetura

O projeto segue princípios de arquitetura limpa (Clean Architecture) e DDD (Domain-Driven Design), separando as camadas em:

- **Domínio**: Entidades, interfaces e regras de negócio essenciais.
- **Aplicação**: Casos de uso que orquestram a lógica a partir dos repositórios.
- **Infraestrutura**: Implementações de repositórios, serviços externos (PokeAPI), controladores HTTP e mapeamento de erros.

## Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/node.js-18.x-brightgreen.svg)
- ![NestJS](https://img.shields.io/badge/NestJS-10.x-E0234E.svg)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)
- ![Axios](https://img.shields.io/badge/Axios-1.x-blue.svg)
- ![Jest](https://img.shields.io/badge/Tested_with-Jest-green.svg)
- Linter: ESLint

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente:

```env
PORT=3000
POKEAPI_BASE_URL=https://pokeapi.co/api/v2
```

## Execução

Para rodar em modo de desenvolvimento:

```bash
npm run start:dev
```

Para rodar em produção (após build):

```bash
npm run build
npm start
```

A API estará disponível em:
```
http://localhost:3000
```

## Testes

Para rodar os testes unitários e de integração:

```bash
npm run test
```

Para gerar cobertura de testes:

```bash
npm run test:coverage
```

## Exemplos de Uso da API

### Listar Pokémons (Com Paginação)

**Requisição:**
```
GET /pokemons?limit=20&offset=0
```

**Resposta (Exemplo):**
```json
[
  {
    "id": 1,
    "name": "bulbasaur",
    "image": "https://pokeapi.co/sprites/pokemon/1.png",
    "types": ["grass", "poison"],
    "weight": 6.9,
    "height": 0.7,
    "abilities": ["overgrow", "chlorophyll"],
    "description": "Description not available.",
    "sound": "https://play.pokemonshowdown.com/audio/cries/bulbasaur.mp3"
  },
  ...
]
```

### Buscar Pokémons por Nome (Filtro)

**Requisição:**
```
GET /pokemons?search=charmander
```

**Resposta (Exemplo):**
```json
[
  {
    "id": 4,
    "name": "charmander",
    "image": "https://pokeapi.co/sprites/pokemon/4.png",
    "types": ["fire"],
    "weight": 8.5,
    "height": 0.6,
    "abilities": ["blaze", "solar-power"],
    "description": "Description not available.",
    "sound": "https://play.pokemonshowdown.com/audio/cries/charmander.mp3"
  }
]
```

### Detalhes de um Pokémon

**Requisição:**
```
GET /pokemons/25
```

**Resposta (Exemplo):**
```json
{
  "id": 25,
  "name": "pikachu",
  "image": "https://pokeapi.co/sprites/pokemon/25.png",
  "types": ["electric"],
  "weight": 6,
  "height": 0.4,
  "abilities": ["static", "lightning-rod"],
  "description": "A yellow Pokémon that stores electricity in its cheeks.",
  "sound": "https://play.pokemonshowdown.com/audio/cries/pikachu.mp3"
}
```

## Casos de Uso

- **GetPokemonsUseCase**: Obtém lista de Pokémons com paginação e pesquisa.
- **GetPokemonByIdUseCase**: Obtém detalhes de um Pokémon específico pelo ID.

Esses casos de uso são injetados em controladores e testados individualmente.

## Próximos Passos

1. **Adicionar autenticação de usuários:**
   - Implementar autenticação com JWT para proteger rotas e criar diferentes níveis de acesso.
2. **Integração com banco de dados:**
   - Salvar Pokémons favoritos por usuário.
3. **Melhorar a documentação:**
   - Adicionar suporte a Swagger para geração automática de documentação.
4. **Cache:**
   - Implementar cache para melhorar a performance ao consumir a PokeAPI.
5. **Testes E2E:**
   - Criar testes ponta-a-ponta para cenários completos.

## Contribuindo

- Faça um fork do repositório.
- Crie uma branch com sua feature: `git checkout -b feature/minha-feature`
- Faça commit das suas alterações: `git commit -m 'Adiciona nova feature'`
- Envie para o upstream: `git push origin feature/minha-feature`
- Crie um Pull Request.

## Licença

Este projeto está sob a licença ISC. Consulte o arquivo LICENSE para mais informações.

