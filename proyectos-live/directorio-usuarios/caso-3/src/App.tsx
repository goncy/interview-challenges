import {useEffect, useRef, useState} from "react";

import api from "./api";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    api.list().then(setUsers);
  }, []);

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const formData = new FormData(formRef.current!);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    const user = await api.add({name, email});

    setUsers((users) => users.concat(user));

    formRef.current?.reset();
  }

  async function handleRemove(id: number) {
    await api.remove(id);

    setUsers((users) => users.filter((user) => user.id !== id));
  }

  return (
    <main>
      <h1>Directorio de usuarios</h1>
      <form ref={formRef}>
        <input name="name" placeholder="Nombre" />
        <input name="email" placeholder="Email" />
        <button onClick={handleSubmit}>Agregar</button>
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
