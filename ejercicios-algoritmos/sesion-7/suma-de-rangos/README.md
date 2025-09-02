# Suma de rangos

Necesitamos crear una función que calcule la suma de todos los números enteros dentro de un rango dado. La función debe recibir dos parámetros: el número inicial y el número final del rango (ambos inclusivos).

Si el número inicial es mayor que el final, la función debe devolver 0.

```ts
sumaDeRangos(1, 5); // 15 (1 + 2 + 3 + 4 + 5)
sumaDeRangos(3, 7); // 25 (3 + 4 + 5 + 6 + 7)
sumaDeRangos(5, 1); // 0 (rango inválido)
sumaDeRangos(4, 4); // 4 (solo un número)
```

## Explicación didáctica

Este ejercicio es perfecto para practicar:
- **Bucles**: Podés usar un `for` o `while` para iterar sobre el rango
- **Condiciones**: Verificar si el rango es válido antes de calcular
- **Acumuladores**: Mantener una suma total mientras iterás
- **Matemática**: También podés usar la fórmula matemática de suma aritmética: `n(a + b)/2` donde `n` es la cantidad de términos

¿Sabías que existe una fórmula matemática para calcular esto sin usar bucles? ¡Es una excelente oportunidad para mostrar diferentes enfoques!