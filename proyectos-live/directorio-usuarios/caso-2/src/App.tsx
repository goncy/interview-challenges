import {useEffect, useState} from "react";

import api from "./api";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    api.search(query).then(setUsers);
  }, [query]);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    api.add({name, email});

    form.reset();
  }

  function handleRemove(id: number) {
    api.remove(id);
  }

  return (
    <main>
      <h1>Directorio de usuarios</h1>
      <input
        placeholder="Buscar por nombre o email"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" />
        <input name="email" placeholder="Email" />
        <button>Agregar</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <strong>{user.name}</strong>
              <span>{user.email}</span>
            </div>
            <button className="remove" onClick={() => handleRemove(user.id)}>
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
