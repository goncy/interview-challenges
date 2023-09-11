# LIS (Longest increasing subsequence)

Se necesita implementar una función que recibe un array de enteros positivos cómo parámetro y tiene que devolver la secuencia incremental más larga (LIS: Longest increasing subsequence). Una LIS es un set de la lista original en dónde los números están ordenados, del más chico al más grande. La secuencia no tiene que ser contigua o única, y obviamente puede haber varias secuencias distintas.

Por ejemplo: Si el array es `[4, 3, 5, 1, 6]` una posible LIS es `[3, 5, 6]` y otra es `[1, 6]`. Para este array, la función tiene que devolver `3` porque es el largo de la LIS más larga.

```js
[9, 9, 4, 2]  =>  1
[10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]  =>  7
```