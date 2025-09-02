# Anagramas

Implementá una función que determine si dos strings son anagramas. Dos palabras son anagramas si contienen exactamente las mismas letras pero en diferente orden. La función debe ignorar espacios y ser case-insensitive.

```ts
sonAnagramas("listen", "silent"); // true
sonAnagramas("elbow", "below"); // true
sonAnagramas("study", "dusty"); // true
sonAnagramas("hello", "world"); // false
sonAnagramas("A gentleman", "Elegant man"); // true
```

## Explicación didáctica

Este ejercicio es ideal para practicar:
- **Normalización de strings**: `toLowerCase()`, `replace()` para limpiar datos
- **Ordenamiento**: Ordenar caracteres para comparar
- **Mapas de frecuencia**: Contar caracteres y comparar conteos
- **Métodos de array**: `split()`, `sort()`, `join()`
- **Expresiones regulares**: Usar `/\s/g` para remover espacios

**Enfoques diferentes**:
1. Ordenar ambos strings y compararlos
2. Crear mapas de frecuencia y compararlos
3. Usar un objeto contador y decrementar por cada carácter