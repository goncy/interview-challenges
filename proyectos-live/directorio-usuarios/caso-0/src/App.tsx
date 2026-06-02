import {useEffect, useState} from "react";

import api from "./api";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");
  const matches = users.filter((user) => user.name.includes(query));

  useEffect(() => {
    api.list();
  }, []);

  return (
    <main>
      <h1>Directorio de usuarios</h1>
      <input
        placeholder="Buscar por nombre"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {matches.map((user) => (
          <li key={user.id}>
            <div>
              <strong>{user.name}</strong>
              <span>{user.email}</span>
            </div>
            <span className={`badge ${user.active ? "active" : "inactive"}`}>{user.role}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
