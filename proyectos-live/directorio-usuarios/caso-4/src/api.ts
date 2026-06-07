import type {BulkResult, User} from "./types";

let users: User[] = [
  {id: 1, name: "Ada Lovelace", email: "ada@mail.com"},
  {id: 2, name: "Alan Turing", email: "alan@mail.com"},
  {id: 3, name: "Grace Hopper", email: "grace@mail.com"},
  {id: 4, name: "Linus Torvalds", email: "linus@mail.com"},
  {id: 5, name: "Margaret Hamilton", email: "margaret@mail.com"},
  {id: 6, name: "Dennis Ritchie", email: "dennis@mail.com"},
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  list: async (): Promise<User[]> => {
    console.log("[api.list] start");

    await wait(600);

    console.log("[api.list] end", {count: users.length});

    return users;
  },
  bulkSetActive: async (ids: number[], active: boolean): Promise<BulkResult> => {
    console.log("[api.bulkSetActive] start", {ids, active});

    await wait(900);

    const succeeded: number[] = [];
    const failed: number[] = [];

    for (const id of ids) {
      // Cada usuario puede fallar de forma independiente.
      if (Math.random() < 0.3) {
        failed.push(id);
        continue;
      }

      users = users.map((user) => (user.id === id ? {...user, active} : user));
      succeeded.push(id);
    }

    console.log("[api.bulkSetActive] end", {succeeded, failed});

    return {succeeded, failed};
  },
  remove: async (id: number): Promise<void> => {
    console.log("[api.remove] start", {id});

    await wait(800);

    users = users.filter((user) => user.id !== id);

    console.log("[api.remove] end", {id});
  },
};

export default api;
