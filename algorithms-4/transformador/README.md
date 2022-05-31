# Transformador

Hacer una función que reciba un objeto 'data' y lo transforme en la estructura output.

```js
const data = {
  nombres: [STRING],
  edades: [INT],
}
const output = [
  { id: [STRING], nombre: [STRING], edad: [INT] },
  ...
]
```

Ejemplo:

```js
func({ nombres: ["Bruno", "Andrea"], edades: [20, 19] });
```

Devuelve:

```js
[
  { id: "1", nombre: "Bruno", edad: 20 },
  { id: "2", nombre: "Andrea", edad: 19 },
];
```
