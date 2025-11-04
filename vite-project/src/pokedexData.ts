export type PokemonType = 'Normal' | 'Fogo' | 'Água' | 'Elétrico' | 'Grama' | 'Gelo' | 'Lutador' | 'Venenoso' | 'Terrestre' | 'Voador' | 'Psíquico' | 'Inseto' | 'Pedra' | 'Fantasma' | 'Dragão' | 'Noturno' | 'Aço' | 'Fada';

export interface Pokemon {
    id: number;
    nome: string;
    iconUrl: string;
    numero: string;
    tipos: PokemonType[];
}

export const pokemons: Pokemon[] = [
    {
        id: 1,
        nome: 'Bulbasauro',
        iconUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
        numero: '#001',
        tipos: ['Grama', 'Venenoso']
    },

    {
        id: 6,
        nome: 'Charizard',
        iconUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif',
        numero: '#006',
        tipos: ['Fogo', 'Voador']
    },

    {
        id: 150,
        nome: 'Mewtwo',
        iconUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif',
        numero: '#150',
        tipos: ['Psíquico']
    },

]