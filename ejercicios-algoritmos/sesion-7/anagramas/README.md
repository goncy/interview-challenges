# Anagramas

Implementá una función que determine si dos strings son anagramas. Dos palabras son anagramas si contienen exactamente las mismas letras pero en diferente orden. La función debe ignorar espacios y ser case-insensitive.

```ts
sonAnagramas("listen", "silent"); // true
sonAnagramas("elbow", "below"); // true
sonAnagramas("study", "dusty"); // true
sonAnagramas("hello", "world"); // false
sonAnagramas("A gentleman", "Elegant man"); // true
sonAnagramas("food", "doff"); // false
```