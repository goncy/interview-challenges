import type {User} from "./types";

let users: User[] = [
  {id: 1, name: "Ada Lovelace", email: "ada@mail.com"},
  {id: 2, name: "Alan Turing", email: "alan@mail.com"},
  {id: 3, name: "Grace Hopper", email: "grace@mail.com"},
  {id: 4, name: "Linus Torvalds", email: "linus@mail.com"},
  {id: 5, name: "Margaret Hamilton", email: "margaret@mail.com"},
  {id: 6, name: "Dennis Ritchie", email: "dennis@mail.com"},
];

let nextId = users.length + 1;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  search: async (query: string): Promise<User[]> => {
    console.log("[api.search] start", {query});

    await wait(300 + Math.random() * 900);

    const q = query.trim().toLowerCase();

    const result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(q) || user.email.toLowerCase().includes(q),
    );

    console.log("[api.search] end", {query, count: result.length});

    return result;
  },
  add: async (data: {name: string; email: string}): Promise<User> => {
    console.log("[api.add] start", data);

    await wait(800);

    const user: User = {
      id: nextId++,
      name: data.name,
      email: data.email,
    };

    users = users.concat(user);

    console.log("[api.add] end", user);

    return user;
  },
  remove: async (id: number): Promise<void> => {
    console.log("[api.remove] start", {id});

    await wait(800);

    users = users.filter((user) => user.id !== id);

    console.log("[api.remove] end", {id});
  },
};

export default api;
