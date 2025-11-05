import './Pokedex.css';
import { PokemonCard } from './PokemonCard';
import {pokemons} from '../pokedexData';

export function Pokedex() {
    return (
        <div className="pokedex-container">
        {pokemons.map(pokemon => (
            <PokemonCard
            key={pokemon.id}
            nome={pokemon.nome}
            numero={pokemon.numero}
            iconUrl={pokemon.iconUrl}
            tipos={pokemon.tipos}
            />
        ))}
        </div>
    );
}

