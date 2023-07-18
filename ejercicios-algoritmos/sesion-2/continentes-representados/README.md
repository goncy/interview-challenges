# Continentes representados

Escribir una función que recibe como parametro una lista de desarrolladores que se anotaron para asistir a una meetup. La función debe devolver `true` si existe al menos una persona de cada continente (Africa, Americas, Asia, Europe, Oceania).

Nota: Los continentes siempre estarán presentes y escritos correctamente.

Ejemplo:

```js
continentesRepresentados([
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
]); // true
```

Bonus:

- Hacer otra función para retornar la cantidad de JavaScript developers que vienen de Europa y escribir los tests necesarios
- Hacer otra función que retorne el mismo array pero con una nueva propiedad `greeting` que contenga el valor `Hi < firstName here >, what do you like the most about < language here >?` y escribir los tests necesarios
- Hacer otra función que liste los lenguajes representados, sin repetir y escribir los tests necesarios
