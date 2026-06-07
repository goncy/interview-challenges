import {faker} from "@faker-js/faker";

import type {Page, User} from "./types";

faker.seed(42);

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  list: async ({count}: {start: number; count: number}): Promise<Page> => {
    await wait(600);

    const items = Array.from({length: count}, () => {
      const name = faker.person.fullName();

      return {
        id: faker.number.int(),
        name,
        email: faker.internet.email({firstName: name.split(" ")[0]}).toLowerCase(),
      };
    });

    return {items, total: Infinity};
  },
};

export default api;
