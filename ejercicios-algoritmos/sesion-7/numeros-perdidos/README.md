# Números perdidos

Dado un array de números enteros positivos que debería contener números consecutivos del 1 al N, pero le faltan algunos números, implementá una función que devuelva un array con todos los números que faltan.

```ts
numerosPerdidos([1, 3, 5, 7]); // [2, 4, 6]
numerosPerdidos([2, 4, 6, 8]); // [1, 3, 5, 7]
numerosPerdidos([1, 2, 3, 4, 5]); // []
numerosPerdidos([3, 1, 4]); // [2]
```

## Explicación didáctica

Este ejercicio te ayuda a practicar:
- **Algoritmos de búsqueda**: Encontrar elementos faltantes en secuencias
- **Operaciones con arrays**: `includes()`, `push()`, `sort()`
- **Bucles y rangos**: Iterar desde el mínimo al máximo valor
- **Optimización**: Pensar en diferentes enfoques (O(n²) vs O(n))
- **Set vs Array**: Comparar performance entre diferentes estructuras

**Enfoques posibles**:
1. Crear un array del 1 al máximo y filtrar los que no están
2. Usar `Set` para búsquedas O(1) más eficientes
3. Ordenar primero y buscar gaps secuencialmente