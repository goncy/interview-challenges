import {useEffect, useState} from "react";

import api from "./api";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.list().then(setUsers);
  }, []);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    setUsers((users) =>
      users.concat({id: Date.now(), name, email}),
    );
  }

  return (
    <main>
      <h1>Directorio de usuarios</h1>
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
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
