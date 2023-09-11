# Urinales libres

En los baños de hombre hay una regla inquebrantable que es dejar un urinal libre entre vos y la persona de al lado. Por ejemplo, si hay 3 urinales y una persona está en el urinal de la izquierda, vos tenes que ir inmediatamente al de la derecha. Con esto podemos decir que un máximo de 3 personas puede orinar si hay 5 urinales y sólo 2 si hay 4.

Tú tarea: Escribir una función que retorne la cantidad máxima de urinales libres (un entero) siguiendo la regla que mencionamos.

Input: Un string que contiene 1s y 0s (Por ejemplo: 10001) (1 <= Urinales <= 20)
Los 1 significa que el urinal está ocupado y 0 está libre

> Nota: Si hay un error en el string como por ejemplo: 011, retornar -1 

```js
"10001" => 1 (10101)
"1001" => 0 (1001)
"00000" => 3 (10101)
"000" => 2 (101)
"01000" => 1 (01010 o 01001)
```