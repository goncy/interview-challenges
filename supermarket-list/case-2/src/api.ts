import {Item} from "./types";

export default {
  list: (): Promise<Item[]> =>
    Promise.resolve([
      {
        id: 1,
        text: "Some thing to buy",
        completed: false,
      },
      {
        id: 2,
        text: "Some other thing to buy",
        completed: true,
      },
      {
        id: 3,
        text: "Some last to buy",
        completed: false,
      },
    ]),
};
