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
  list: async (): Promise<User[]> => {
    await wait(600);

    return users;
  },
  add: async (data: {name: string; email: string}): Promise<User> => {
    await wait(700);

    const user: User = {
      id: nextId++,
      name: data.name,
      email: data.email,
    };

    users = users.concat(user);

    return user;
  },
  remove: async (id: number): Promise<void> => {
    await wait(700);

    users = users.filter((user) => user.id !== id);
  },
};

export default api;
