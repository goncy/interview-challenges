import type {User} from "./types";

const users: User[] = [
  {id: 1, name: "Ada Lovelace", email: "ada@mail.com"},
  {id: 2, name: "Alan Turing", email: "alan@mail.com"},
  {id: 3, name: "Grace Hopper", email: "grace@mail.com"},
  {id: 4, name: "Linus Torvalds", email: "linus@mail.com"},
  {id: 5, name: "Margaret Hamilton", email: "margaret@mail.com"},
  {id: 6, name: "Dennis Ritchie", email: "dennis@mail.com"},
];

const api = {
  list: async (): Promise<User[]> =>
    new Promise((resolve) => setTimeout(() => resolve(users), 1000)),
};

export default api;
