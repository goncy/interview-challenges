# Isograma

Un isograma es una palabra que no tiene letras repetidas. Consideraciones Adicionales:

- Un string vacío es un isograma.
- La función tiene que ser case insensitive e ignorar acentos.
- Si el string tiene mas de una palabra retornar false.
- Se tiene que hacer clean up del string antes de comparar.

Ejemplos:

```js
func("Murciélago"); // returns true
func("reto"); // returns false
func("Casa"); // returns false
func("PeRrO"); // returns false
func("GaTo"); // returns true
```
