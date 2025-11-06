export type PokemonType = 'Grama' | 'Venenoso' | 'Fogo' | 'Água' | 'Elétrico' | 'Inseto' | 'Terra' | 'Pedra' | 'Gelo' | 'Voador' | 'Psíquico' | 'Normal' | 'Dragão' | 'Fada' | 'Lutador' | 'Fantasma';

export interface PokemonStat {
  nome: 'HP' | 'ATK' | 'DEF' | 'Sp.ATK' | 'Sp.DEF' | 'SPEED';
  valor: number;
}

export interface Pokemon {
  id: number;
  nome: string;
  numero: string;
  imagemUrl: string;
  tipos: PokemonType[];
  estatisticas: PokemonStat[];
  fraquezas: PokemonType[];
  vantagens: PokemonType[];
  selecionado: boolean;
}

export const todosPokemons: Pokemon[] = [
  {
    id: 25, nome: 'Pikachu', numero: '#025', selecionado: true,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif',
    tipos: ['Elétrico'],
    estatisticas: [
      { nome: 'HP', valor: 35 }, { nome: 'ATK', valor: 55 }, { nome: 'DEF', valor: 40 },
      { nome: 'Sp.ATK', valor: 50 }, { nome: 'Sp.DEF', valor: 50 }, { nome: 'SPEED', valor: 90 },
    ],
    fraquezas: ['Terra'],
    vantagens: ['Água', 'Voador'],
  },
  {
    id: 6, nome: 'Charizard', numero: '#006', selecionado: true,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
    tipos: ['Fogo', 'Voador'],
    estatisticas: [
      { nome: 'HP', valor: 78 }, { nome: 'ATK', valor: 84 }, { nome: 'DEF', valor: 78 },
      { nome: 'Sp.ATK', valor: 109 }, { nome: 'Sp.DEF', valor: 85 }, { nome: 'SPEED', valor: 100 },
    ],
    fraquezas: ['Água', 'Elétrico', 'Pedra'],
    vantagens: ['Grama', 'Inseto', 'Gelo'],
  },
  {
    id: 1, nome: 'Bulbasaur', numero: '#001', selecionado: true,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
    tipos: ['Grama', 'Venenoso'],
    estatisticas: [
      { nome: 'HP', valor: 45 }, { nome: 'ATK', valor: 49 }, { nome: 'DEF', valor: 49 },
      { nome: 'Sp.ATK', valor: 65 }, { nome: 'Sp.DEF', valor: 65 }, { nome: 'SPEED', valor: 45 },
    ],
    fraquezas: ['Fogo', 'Gelo', 'Voador', 'Psíquico'],
    vantagens: ['Água', 'Grama', 'Fada'],
  },
  {
    id: 7, nome: 'Squirtle', numero: '#007', selecionado: false,
    imagemUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    tipos: ['Água'],
    estatisticas: [ 
      { nome: 'HP', valor: 44 }, { nome: 'ATK', valor: 48 }, { nome: 'DEF', valor: 65 },
      { nome: 'Sp.ATK', valor: 50 }, { nome: 'Sp.DEF', valor: 64 }, { nome: 'SPEED', valor: 43 },
    ],
    fraquezas: ['Elétrico', 'Grama'],
    vantagens: ['Fogo', 'Terra', 'Pedra'],
  },
];