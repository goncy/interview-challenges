import type {Pokemon} from "./types";

type PokemonCardProps = {
  pokemon: Pokemon;
  onAdd: (pokemon: Pokemon) => void;
};

export default function PokemonCard({pokemon, onAdd}: PokemonCardProps) {
  return (
    <article key={pokemon.id}>
      <img className="nes-container" src={pokemon.image} />
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.description}</p>
      </div>
      <button className="nes-btn" onClick={() => onAdd(pokemon)}>
        Agregar
      </button>
    </article>
  );
}
