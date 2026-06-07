import {useEffect, useState} from "react";

import api from "./api";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.list({start: 0, count: 8}).then((result) => setUsers(result.items));
  }, []);

  return (
    <main>
      <h1>Directorio de usuarios</h1>
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
      <button>Cargar más</button>
    </main>
  );
}

export default App;
