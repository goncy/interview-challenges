# Las moscas comedoras

> Contexto: La suma de un número, por ejemplo 5, es la suma de todos los números enteros desde 1 hasta 5. Es decir, 1 + 2 + 3 + 4 + 5 = 15.

Estás sentado con dos ranas, Santi y Siri. Están peleando entre ellas a ver quien comió más moscas.

Santi dijo: Me comí la suma de N moscas! (1 + 2 ... N)
Siri le responde: Agarrá la mitad de esas moscas, redondealo para abajo. Yo me comí la suma de ese número! (1 + 2 ... M)
De la nada, aparece Ubi la rana y dice: Yo me comí la suma de las moscas que se comieron ustedes! (1 + 2 ... N +M)

Como no te gusta complicar las cosas, decidís hacer una función que diga efectivamente cuantas moscas se comió cada rana. La función recibe un número entero `numero` que representa la cantidad de moscas que se comió Santi y debe devolver un string como lo siguiente.

```ts
lasMoscasComedoras(5); // `Santi se comió 15 moscas, Siri se comió 28 moscas y Ubi se comió 946 moscas`
```
