# Suma de rangos

Necesitamos crear una función que calcule la suma de todos los números enteros dentro de un rango dado. La función debe recibir dos parámetros: el número inicial y el número final del rango (ambos inclusivos).

Si el número inicial es mayor que el final, la función debe devolver 0.

```ts
sumaDeRangos(1, 5); // 15 (1 + 2 + 3 + 4 + 5)
sumaDeRangos(3, 7); // 25 (3 + 4 + 5 + 6 + 7)
sumaDeRangos(5, 1); // 0 (rango inválido)
sumaDeRangos(4, 4); // 4 (solo un número)
```