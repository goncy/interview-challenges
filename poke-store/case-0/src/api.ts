import type {Pokemon} from "./types";

const api = {
  list: async (): Promise<Pokemon[]> =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            {
              id: "1",
              name: "Bulbasaur",
              price: 5,
              description:
                "Bulbasaur es un Pokémon cuadrúpedo de color verde y manchas más oscuras de formas geométricas.",
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
            },
            {
              id: "4",
              name: "Charmander",
              price: 5,
              description:
                "Charmander es un pequeño lagarto bípedo. Sus características de fuego son resaltadas por su color de piel anaranjado y su cola con la punta envuelta en llamas.",
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`,
            },
            {
              id: "7",
              name: "Squirtle",
              price: 5,
              description:
                "Squirtle es una de las especies más difíciles de encontrar. Habita tanto aguas dulces como marinas, preferiblemente zonas bastante profundas.",
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png`,
            },
            {
              id: "25",
              name: "Pikachu",
              price: 5,
              description:
                "Pikachu almacena una gran cantidad de electricidad en sus mejillas. Estas parecen cargarse eléctricamente durante la noche mientras duerme.",
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`,
            },
            {
              id: "133",
              name: "Eevee",
              price: 5,
              description:
                "Eevee es un Pokémon de tipo normal que se asemeja en tamaño y forma a un pequeño zorro.",
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png`,
            },
            {
              id: "54",
              name: "Psyduck",
              price: 5,
              description:
                "Se alimenta de peces que quedan atontados en las rocas o que accidentalmente chocan con él.",
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png`,
            },
          ]),
        1000,
      ),
    ),
};

export default api;
