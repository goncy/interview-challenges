# Contar duplicados

Escribir una función que devuelva la cantidad de caracteres alfabéticos y dígitos numéricos distintos, sin distinguir entre mayúsculas y minúsculas, que aparecen más de una vez en la cadena de entrada. Se puede suponer que la cadena de entrada solo contiene letras (mayúsculas y minúsculas) y dígitos numéricos.

```js
"abcde" -> 0 // => ningún carácter se repite más de una vez
"aabbcde" -> 2 // => 'a' y 'b'
"aabBcde" -> 2 // => 'a' aparece dos veces y 'b' dos veces (b y B)
"indivisibility" -> 1 // => 'i' aparece seis veces
"Indivisibilities" -> 2 // => 'i' aparece siete veces y 's' dos veces
"aA11" -> 2 // => 'a' y '1'
"ABBA" -> 2 // => 'A' y 'B' aparecen dos veces cada uno
```
