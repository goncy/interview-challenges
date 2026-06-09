import {faker} from "@faker-js/faker";

import type {Page, User} from "./types";

faker.seed(42);

const MAX_USERS = 40;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  list: async ({start, count} = { start: 0, count: 8 }): Promise<Page> => {
    await wait(600);

    const items = Array.from({length: Math.min(count, MAX_USERS - start)}, () => {
      const name = faker.person.fullName();

      return {
        id: faker.number.int(),
        name,
        email: faker.internet.email({firstName: name.split(" ")[0]}).toLowerCase(),
      } as User;
    });

    return {items, total: MAX_USERS};
  },
};

export default api;
