# Ejercicio de entrevista, booscaminas

Hoy es Halloween (o no si venís del futuro) pero las calabazas están de promoción y los sustos están en oferta. Queremos mantener el espiritu de Halloween y para eso vamos a hacer un juego de Buscaminas. No tenemos especificaciones muy claras así que esperamos que nos sorprendas con tu creatividad.

## Requerimientos

- [ ] Debemos ver una grilla de 10x10 casillas donde podemos clickear cada una de ellas.
- [ ] Al clickear una casilla deberíamos ver en número, cuantas calabazas (bombas) hay alrededor de esa casilla.
- [ ] Si clickeamos una casilla que tiene una calabaza el juego debería terminar.
- [ ] Si clickeamos todas las casillas que no tienen calabazas, deberíamos ver un mensaje de victoria.
- [ ] Al perder debemos emitir un sonido de susto (en la carpeta `public` hay un `.mp3`).
- [ ] Agregar un botón para reiniciar el juego.

## Extras

- [ ] Podemos elegir el tamaño de la grilla.
- [ ] Podemos elegir la cantidad de calabazas que hay en la grilla.
- [ ] Podemos poner velas (banderas) en la grilla haciendo click derecho en una casilla.
- [ ] Podemos ver un contador de casillas que nos quedan por clickear.
- [ ] Agregar un timer para ver cuánto tiempo tardamos en resolver el juego.
- [ ] Agregar un scoreboard para ver los mejores tiempos de los jugadores.
- [ ] Al clickear una casilla que no tiene calabazas cerca, se abren todas las casillas aledañas que tampoco tienen calabazas.

## Ideas
- No pierdas el tiempo: Si el usuario no clickea una casilla por un determinado tiempo, emite un sonido de susto.
- Booscaminas a oscuras: Una vez que clickeamos una casilla solamente podemos pasar con el mouse por las casillas aledañas, si salimos de esas casillas, perdemos.
