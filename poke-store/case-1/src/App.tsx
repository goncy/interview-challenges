import type {Pokemon} from "./types";

import {useState} from "react";

import {POKEMONS} from "./constants";

function App() {
  const [cart, setCart] = useState<Pokemon[]>([]);

  return (
    <>
      <nav>
        <input className="nes-input" id="name_field" placeholder="Charmander" type="text" />
      </nav>
      <section>
        {POKEMONS.map((pokemon) => (
          <article key={pokemon.id}>
            <figure>
              <i className="nes-icon is-medium is-transparent heart" />
              <img className="nes-container" src={pokemon.image} />
            </figure>
            <div>
              <p>
                {pokemon.name} (${pokemon.price})
              </p>
              <p>{pokemon.description}</p>
            </div>
            <button className="nes-btn" onClick={() => setCart(cart.concat(pokemon))}>
              Agregar
            </button>
          </article>
        ))}
      </section>
      <aside>
        <button className="nes-btn is-primary">0 items (total $0)</button>
      </aside>
    </>
  );
}

export default App;
