# Pedir detalles

Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup, escribir una función que chequee por propiedades en `null` y en caso de encontrar, agregar una una propiedad `question` con el valor: `Hi, could you please provide your <property name>`. Solo se deberían devolver los desarrolladores que contienen la propiedad `question`.

```js
const desarrolladores = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

/*
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
*/
```
