# Números perdidos

Dado un array de números enteros positivos que debería contener números consecutivos del 1 al N, pero le faltan algunos números, implementá una función que devuelva un array con todos los números que faltan.

```ts
numerosPerdidos([1, 3, 5, 7]); // [2, 4, 6]
numerosPerdidos([2, 4, 6, 8]); // [1, 3, 5, 7]
numerosPerdidos([1, 2, 3, 4, 5]); // []
numerosPerdidos([3, 1, 4]); // [2]
```