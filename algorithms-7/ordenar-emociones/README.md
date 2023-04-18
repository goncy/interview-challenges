# Ordenar emociones

Tendrás una función llamada "ordenarEmociones" que devolverá un arreglo de emociones ordenadas. Tiene dos parámetros, el primer parámetro llamado "emociones" esperará un arreglo de emociones donde una emoción será una de las siguientes:

```js
":D" -> Súper Feliz
":)" -> Feliz
":|" -> Normal
":(" -> Triste
"T_T" -> Súper Triste
```

Y el segundo parámetro se llama `orden`, si este parámetro es `true`, entonces el orden de las emociones será descendente (de Súper Feliz a Súper Triste), si es `false`, entonces será ascendente (de Súper Triste a Súper Feliz)

Ejemplo si el orden es `true` con el arreglo anterior:

```js
[":D", ":)", ":|", ":(", "T_T"]; // => Súper Feliz -> Feliz -> Normal -> Triste -> Súper Triste
```

Si orden es `false`:

```js
["T_T", ":(", ":|", ":)", ":D"]; // => Súper Triste -> Triste -> Normal -> Feliz -> Súper Feliz
```

Ejemplo:

```js
arr = [":D", ":|", ":)", ":(", ":D"];
ordenarEmociones(arr, true); // [ ":D", ":D", ":)", ":|", ":(" ]
ordenarEmociones(arr, false); // [ ":(", ":|", ":)", ":D", ":D" ]
```

### Notas

- El arreglo podría estar vacío, en ese caso devuelve el mismo arreglo vacío ¯*( ツ )*/¯
- Todas las emociones serán válidas
