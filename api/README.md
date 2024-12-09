# Jitterbit Pokedex Front

[![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/) 
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)](https://nodejs.org/)
[![RxJS](https://img.shields.io/badge/rxjs-6B4AE2?style=for-the-badge&logo=ReactiveX&logoColor=white)](https://rxjs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

O **Jitterbit Pokedex Front** é uma aplicação front-end desenvolvida em Angular para visualizar, pesquisar e conhecer os detalhes de diversos Pokémons. Ela se integra a uma API Node.js customizada que, por sua vez, consume dados da [PokeAPI](https://pokeapi.co/).

## Funcionalidades Principais

- **Listagem Infinita de Pokémons:**  
  À medida que o usuário desce a página, novos Pokémons são carregados automaticamente, sem a necessidade de apertar botões.

- **Busca com Debounce:**  
  Ao digitar o nome de um Pokémon no campo de busca, os resultados são filtrados após um curto intervalo (300ms), evitando requisições desnecessárias à API e tornando a interação mais suave.

- **Detalhes do Pokémon:**  
  Ao clicar em um card, o usuário é redirecionado para uma página de detalhes onde pode visualizar informações completas sobre o Pokémon selecionado, incluindo tipos, habilidades, peso, altura e descrição. Além disso, o som característico do Pokémon é reproduzido ao entrar na página.

- **Estilização Moderna com Tailwind CSS:**  
  A interface foi construída utilizando classes utilitárias do Tailwind, resultando em um design moderno, responsivo e fácil de manter.

## Tecnologias Utilizadas

- **Angular:** Framework robusto para construção de aplicações front-end escaláveis.  
- **TypeScript:** Linguagem que adiciona tipagem estática ao JavaScript, trazendo maior segurança ao código.  
- **RxJS:** Biblioteca reativa que facilita a manipulação de streams de dados e implementa o debounce na busca.  
- **Tailwind CSS:** Framework CSS baseado em classes utilitárias, agilizando o desenvolvimento de interfaces responsivas.  
- **Node.js (API Externa):** A aplicação consome dados de uma API Node.js própria, que fornece informações já agregadas da PokeAPI.  
- **PokeAPI:** Fonte original dos dados sobre Pokémons.

## Pré-Requisitos

- [Node.js](https://nodejs.org/en/) (>= 14.0.0)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

## Instalação e Execução

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/seu-usuario/jitterbit-pokedex-front.git
   cd jitterbit-pokedex-front
   ```

2. **Instalar Dependências:**
   ```bash
   yarn install
   ```
   ou
   ```bash
   npm install
   ```

3. **Iniciar a Aplicação:**
   ```bash
   yarn start
   ```
   ou
   ```bash
   npm start
   ```
   
   A aplicação estará disponível em [http://localhost:4200](http://localhost:4200).

## Estrutura do Projeto

```bash
src/
  app/
    core/
      services/        # Serviços (PokemonService) para comunicação com a API externa
    modules/
      pokemon/
        models/        # Modelos TypeScript (Pokemon)
        components/    # Componentes visuais (pokemon-list, pokemon-card, etc.)
        pages/         # Páginas (pokemon.page, pokemon-detail.page)
    ...
```

## Como Utilizar

- **Busca:**  
  Digite o nome do Pokémon no campo "Search Pokémon...". Aguarde alguns milissegundos para ver o resultado filtrado.  
- **Scroll Infinito:**  
  Role a lista para baixo e veja novos Pokémons sendo carregados automaticamente.  
- **Detalhes do Pokémon:**  
  Clique em um Pokémon para ver informações detalhadas e ouvir o som característico desse Pokémon.

## Exemplos de Páginas

### Página Inicial (Listagem de Pokémons)
- Lista os Pokémons com a funcionalidade de scroll infinito.
- Barra de busca no topo para filtrar os Pokémons por nome.

### Página de Detalhes do Pokémon
- Exibe informações detalhadas como:
  - Nome
  - Tipo(s)
  - Peso e altura
  - Habilidades
  - Descrição
- Reproduz o som do Pokémon automaticamente ao entrar na página.

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Crie um fork do repositório.
2. Crie uma branch para sua feature ou correção: `git checkout -b minha-feature`.
3. Faça o commit das suas alterações: `git commit -m 'Minha nova feature'`.
4. Faça o push para a branch: `git push origin minha-feature`.
5. Crie um Pull Request e descreva as mudanças.

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.