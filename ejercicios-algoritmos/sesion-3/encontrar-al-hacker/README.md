# Encontrar al hacker

Alguien estuvo hackeando las notas. El historial de notas de cada estudiante se presenta como un array de arrays. El primer elemento de cada array es el `nombre` del estudiante, el segundo es el `puntaje` el tercero es un array de sus `calificaciones`.

```js
const estudiantes = [
  ["goncy", 445, ["B", "A", "A", "C", "A", "A"]],
  ["mati", 140, ["B", "A", "A", "A"]],
  ["caro", 200, ["B", "A", "A", "C"]]
];
```

Cada calificación corresponde a un puntaje:
* A: 30 puntos
* B: 20 puntos
* C: 10 puntos
* D: 5 puntos
* Todo el resto: 0 puntos

Si hay al menos 5 calificaciones y todas son B o mayor, 20 puntos extra se suman al puntaje. Luego de todos los calculos se debe limitar el puntaje a un máximo de 200.

Retornar un listado del nombre de los hackers.

```js
const estudiantes = [
  ["goncy", 445, ["B", "A", "A", "C", "A", "A"]],
  ["mati", 140, ["B", "A", "A", "A"]],
  ["caro", 200, ["B", "A", "A", "C"]]
];

// => ["goncy", "caro"]
```