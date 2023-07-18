import type {Item} from "./types";

import {useEffect, useState} from "react";

import styles from "./App.module.scss";
import api from "./api";

function App() {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    api.list().then(setItems);
  }, []);

  return (
    <main className={styles.main}>
      <h1>Supermarket list</h1>
      <form>
        <input name="text" type="text" />
        <button>Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li className={item.completed ? styles.completed : ""}>
            {item.text} <button>[X]</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
