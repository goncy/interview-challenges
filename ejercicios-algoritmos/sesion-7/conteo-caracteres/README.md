# Conteo de caracteres

Implementá una función que reciba un string y devuelva un objeto con el conteo de cada carácter. La función debe ser case-sensitive (distinguir mayúsculas de minúsculas) y contar todos los caracteres incluyendo espacios.

```ts
conteoCaracteres("hello"); 
// { h: 1, e: 1, l: 2, o: 1 }

conteoCaracteres("Hello World!");
// { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }

conteoCaracteres("");
// {}
```