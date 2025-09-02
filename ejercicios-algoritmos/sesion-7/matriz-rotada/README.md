# Matriz rotada

Implementá una función que rote una matriz cuadrada 90 grados en sentido horario. La rotación debe hacerse "in-place" (modificando la matriz original) para demostrar manipulación eficiente de memoria.

```ts
const matriz = [
  [1, 2, 3],
  [4, 5, 6], 
  [7, 8, 9]
];

rotarMatriz(matriz);

// La matriz ahora debe ser:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
```

## Explicación didáctica

Este ejercicio es excelente para aprender:
- **Manipulación de matrices**: Trabajar con referencias y modificar arrays bidimensionales
- **Algoritmos in-place**: Modificar estructuras sin usar memoria adicional
- **Patrones de rotación**: Entender cómo se mueven los elementos en una rotación
- **Intercambio de variables**: Usar destructuring o variables temporales
- **Pensamiento espacial**: Visualizar transformaciones geométricas en código

**Tip**: Para rotar 90° horario, el elemento en `[i][j]` va a `[j][n-1-i]` donde `n` es el tamaño de la matriz.