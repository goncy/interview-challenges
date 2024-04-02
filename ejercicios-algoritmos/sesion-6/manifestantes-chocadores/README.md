# Manifestantes chocadores

Otro día, otro grupo de manifestantes en la 9 de Julio. Esta vez, dos facciónes diferentes se encontraron a manifestar pero algunos se confundieron en el sentido de la manifestación, algunos van caminando hacia un lado y otros hacia el otro. Cada vez que se cruzan, se chocan, y al chocarse, cambian de dirección.

Creá una función que reciba un string con una cantidad N de manifestantes indicando su dirección `I` o `D` (Izquierda o Derecha) y devuelva la cantidad de veces que chocaron.

```ts
manifestantesChocadores("ID"); // "0 0" (nunca se cruzan)
manifestantesChocadores("DDD"); // "0 0 0" (nunca se cruzan)
manifestantesChocadores("DI"); // "1 1" (se chocan una vez)
manifestantesChocadores("DDI"); // "1 2 1" (el del medio choca 2 veces, el resto 1 vez)
```
