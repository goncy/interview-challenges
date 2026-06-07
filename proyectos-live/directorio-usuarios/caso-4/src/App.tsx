import {useEffect, useState} from "react";

import api from "./api";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.list().then(setUsers);
  }, []);

  function handleRemove(id: number) {
    api.remove(id);
  }

  return (
    <main>
      <h1>Directorio de usuarios</h1>
      <div className="toolbar">
        <span className="muted">{0} seleccionados</span>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <input type="checkbox" />
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
