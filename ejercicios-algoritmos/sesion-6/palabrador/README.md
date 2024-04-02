# Palabrador

Un creador de contenido con un IQ bastante discutible pasa sus días creando palabras nuevas en base a combinar palabras existentes. Como parte de un estudio científico para entender como funciona su particular cerebro, te dieron la tarea de crear una función que dadas unas palbras, devuelva la nueva palabra. O en caso de que no se pueda, devuelva `No se puede formar la palabra`.

Los científicos se dieron cuenta que usa las letras coincidentes entre el final de una palabra y el inicio de otra para formar la nueva palabra.

```ts
palabrador(["pala", "labrador", "dormir"]); // "lador"
palabrador(["cana", "nabo", "bola", "lado"]); // "nabola"
palabrador(["cana", "bola"]); // "No se puede formar la palabra"
```
