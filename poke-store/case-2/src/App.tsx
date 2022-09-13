import type {Pokemon} from "./types";

import {useState} from "react";

import {POKEMONS} from "./constants";
import PokemonCard from "./PokemonCard";

function App() {
  const [cart, setCart] = useState<Pokemon[]>([]);

  return (
    <>
      <nav>
        <input className="nes-input" id="name_field" placeholder="Charmander" type="text" />
      </nav>
      <section>
        {POKEMONS.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={() => setCart(cart.concat(pokemon))}
          />
        ))}
      </section>
      <aside>
        <button className="nes-btn is-primary">0 items (total $0)</button>
      </aside>
    </>
  );
}

export default App;
