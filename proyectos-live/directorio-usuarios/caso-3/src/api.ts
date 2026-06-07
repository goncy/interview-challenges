import type {User} from "./types";

let users: User[] = [
  {id: 1, name: "Ada Lovelace", email: "ada@mail.com", role: "admin", active: true},
  {id: 2, name: "Alan Turing", email: "alan@mail.com", role: "editor", active: true},
  {id: 3, name: "Grace Hopper", email: "grace@mail.com", role: "editor", active: false},
  {id: 4, name: "Linus Torvalds", email: "linus@mail.com", role: "viewer", active: true},
  {id: 5, name: "Margaret Hamilton", email: "margaret@mail.com", role: "admin", active: false},
  {id: 6, name: "Dennis Ritchie", email: "dennis@mail.com", role: "viewer", active: true},
];

let nextId = users.length + 1;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  list: async (): Promise<User[]> => {
    console.log("[api.list] start");

    await wait(600);

    console.log("[api.list] end", {count: users.length});

    return users;
  },
  add: async (data: {name: string; email: string}): Promise<User> => {
    console.log("[api.add] start", data);

    await wait(700);

    const user: User = {
      id: nextId++,
      name: data.name,
      email: data.email,
      role: "viewer",
      active: true,
    };

    users = users.concat(user);

    console.log("[api.add] end", user);

    return user;
  },
  remove: async (id: number): Promise<void> => {
    console.log("[api.remove] start", {id});

    await wait(700);

    users = users.filter((user) => user.id !== id);

    console.log("[api.remove] end", {id});
  },
  setActive: async (id: number, active: boolean): Promise<User> => {
    console.log("[api.setActive] start", {id, active});

    await wait(700);

    const current = users.find((user) => user.id === id);

    if (!current) {
      throw new Error("Usuario no encontrado");
    }

    const next: User = {...current, active};

    users = users.map((user) => (user.id === id ? next : user));

    console.log("[api.setActive] end", next);

    return next;
  },
};

export default api;
