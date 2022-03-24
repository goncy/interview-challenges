import {Product} from "./types";

const api = {
  list: async (): Promise<Product[]> => [
    {
      id: "estampitancy-trainee",
      title: "Estampitancy Trainee",
      price: 4,
      description: "Te ayuda a conseguir tu primer trabajo en IT",
      image: "https://pbs.twimg.com/media/FLzn7kFVQAg6Tf6?format=jpg&name=large",
    },
    {
      id: "estampita-mayonesa",
      title: "Estampitancy Mayonesa",
      price: 3,
      description:
        "Ayuda a que tus mascotas estén siempre saludables y también a que no te falte la mayonesa con ajo",
      image: "https://pbs.twimg.com/media/FODuO8dUcAAz-YL?format=jpg&name=large",
    },
    {
      id: "estampita-bel",
      title: "Estampitancy Performance",
      price: 3,
      description:
        "No te preocupes más por esos bajos scores de Lighthouse, con esta estampita podrás conseguir una puntuación de 100%",
      image: "https://pbs.twimg.com/media/FN-2rJ5WYAYt5W1?format=jpg&name=large",
    },
    {
      id: "estampita-tostada",
      title: "Estampitancy Tostada",
      price: 3,
      description:
        "La estampita de cada mañana, tenela cerca para que nunca te falte el desayuno ni la merienda",
      image: "https://pbs.twimg.com/media/FOQJmoRXoA06RHm?format=jpg&name=large",
    },
    {
      id: "estampita-octocat",
      title: "Estampitancy Octocat",
      price: 3,
      description: "Nunca más un PR de GitHub esperando días por revisión",
      image: "https://pbs.twimg.com/media/FMYAffEXoAIbSWL?format=jpg&name=large",
    },
    {
      id: "estampita-gin",
      title: "Estampitancy Gin",
      price: 3,
      description: "Estampita para que el Viernes llegue rápido y nunca te falte un gintonic",
      image: "https://pbs.twimg.com/media/FN-2oj5XsAcmuiX?format=jpg&name=large",
    },
  ],
};

export default api;
