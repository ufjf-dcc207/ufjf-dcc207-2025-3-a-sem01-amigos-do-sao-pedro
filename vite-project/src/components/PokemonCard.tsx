import './PokemonCard.css'

interface PokemonCardProps {
  nome: string;
  iconUrl: string;
  numero: string;
  tipos: string[];
}

export function PokemonCard({ nome, iconUrl, numero, tipos }: PokemonCardProps) {
    return (
        <div className='pokemon-card'>
            <img className="pokemon-imagem" src={iconUrl} alt={`Imagem do ${nome}`} />
            <span className="pokemon-numero">{numero}</span>
            <h3 className="pokemon-nome">{nome}</h3>
            <div className="pokemon-tipos">
                {tipos.map(tipo => (
                    <span key={tipo} className={`pokemon-tipo pokemon-tipo-${tipo}`}>
                        {tipo}
                    </span>
                ))}
            </div>
        </div>
    )
}
