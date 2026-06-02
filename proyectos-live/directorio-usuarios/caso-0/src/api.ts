import type {User} from "./types";

const users: User[] = [
  {id: 1, name: "Ada Lovelace", email: "ada@mail.com", role: "admin", active: true},
  {id: 2, name: "Alan Turing", email: "alan@mail.com", role: "editor", active: true},
  {id: 3, name: "Grace Hopper", email: "grace@mail.com", role: "editor", active: false},
  {id: 4, name: "Linus Torvalds", email: "linus@mail.com", role: "viewer", active: true},
  {id: 5, name: "Margaret Hamilton", email: "margaret@mail.com", role: "admin", active: false},
  {id: 6, name: "Dennis Ritchie", email: "dennis@mail.com", role: "viewer", active: true},
];

const api = {
  list: async (): Promise<User[]> =>
    new Promise((resolve) => setTimeout(() => resolve(users), 1000)),
};

export default api;
