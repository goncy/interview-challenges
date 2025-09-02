# Verificar Sudoku

Implementá una función que verifique si una matriz 9x9 representa un Sudoku válido. Un Sudoku es válido cuando:
- Cada fila contiene los dígitos del 1 al 9 sin repetir
- Cada columna contiene los dígitos del 1 al 9 sin repetir  
- Cada uno de los 9 subcuadrados de 3x3 contiene los dígitos del 1 al 9 sin repetir

```ts
const sudokuValido = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

verificarSudoku(sudokuValido); // true
```

## Explicación didáctica

Este ejercicio te permite practicar:
- **Matrices bidimensionales**: Trabajar con arrays de arrays
- **Sets en JavaScript/TypeScript**: Usar `new Set()` para detectar duplicados fácilmente
- **Bucles anidados**: Iterar filas, columnas y subcuadrados
- **Modularización**: Separar la lógica en funciones más pequeñas
- **Validación de datos**: Verificar que todos los elementos sean números del 1 al 9

Una estrategia eficiente es usar `Set` para cada validación, ya que automáticamente elimina duplicados.