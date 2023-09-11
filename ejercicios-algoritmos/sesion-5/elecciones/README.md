# Elecciones olvidadizas

Un centro de jubilados realizó una votación para saber que juego deberían jugar la semana que viene. Como son muchos ancianos en el centro, abrieron varias mesas de votación para poder votar. El problema es que algunos jubilados se olvidaron si ya habían votado o no y votaron varias veces en diferentes mesas.

Por suerte, al votar se piden diferentes datos, como el `id`. Por ende debemos implementar una función que itere todas las mesas y nos devuelva una única lista con solamente un voto por participante.

Nuestra función además de las mesas debe recibir el parámetro por el cual deberíamos hacer la unión

> Podemos asumir que los votantes siempre emitieron el mismo voto en las diferentes mesas

```js
// Input
unificarVotos(
  [
    [{id: "123456", nombre: 'Gaspar', voto: 'Bingo'}, {id: "234123", nombre: 'Clelia', voto: 'Sudoku'}],
    [{id: "123456", nombre: 'Gaspar', voto: 'Bingo'}],
    [{id: "643723", nombre: 'Pedro', voto: 'Sudoku'}]
  ],
  "id"
)

// Output
[
  {id: "123456", nombre: 'Gaspar', voto: 'Bingo'},
  {id: "234123", nombre: 'Clelia', voto: 'Sudoku'},
  {id: "643723", nombre: 'Pedro', voto: 'Sudoku'}
]
```