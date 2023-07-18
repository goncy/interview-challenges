# Aplicación de preguntas anónimas

![01](./assets/01.png)

Este proyecto tiene 4 milestones o entregas, no es necesario que cumplas todas para dar el proyecto por terminado, ajustalo a tus necesidades y conocimientos. Cada entrega se vuelve un poco más difícil.

Intentá que cada entrega tenga calidad de producto final, antes de continuar a la próxima entrega, refactorizá tu código, comentalo o lo que consideres que sea correcto previo a entregarlo a un cliente.

## Entrega 1
Nuestro equipo de diseño nos dijo que quería una aplicación con una interfáz similar a [NGL](https://ngl.link/) y nos dió como referencia la imágen de arriba. A diferencia de NGL, esta es una aplicación de preguntas anónimas donde todas las preguntas llegan al muro principal, no hay un administrador que las contesta, modera o elimina, sino que cualquier persona puede copiar esa pregunta y responderla en sus propias redes.

El cliente nos dió esta aplicación con Next.js + App router y Tailwind CSS configurado, pero nos dijo que podemos usar las tecnologías que queramos para el proyecto. Los requerimientos son:

- Debe haber un formulario en la parte superior para que los usuarios envien preguntas
- Las preguntas nuevas deberían persistir al refrescar la página
- Deberíamos ver las preguntas de otros usuarios además de las nuestras

## Entrega 2
Sumado a lo presentado en la entrega 1:

- Deberíamos tener una ruta para cada pregunta que nos muestre solo su contenido y un botón para volver al inicio
- Al compartir esta ruta en redes sociales, deberiamos mostrar una imágen de open-graph que incluya el texto de la pregunta
- Deberíamos tener un botón en la ruta de cada pregunta que nos permita copiar una imágen de la pregunta al portapapeles

## Entrega 3
Sumado a lo presentado en la entrega 2:

- Deberíamos tener una ruta `/admin` a la cual podemos acceder y nos permita borrar preguntas
- Al estar en la ruta `/admin` y clickear una pregunta podemos contestarla y aparecerá la respuesta debajo de la pregunta

## Entrega 4
Sumado a lo presentado en la entrega 3:

- Podemos acceder a diferentes "canales" y cada canal tiene sus propias preguntas. Por ej: entrar a `/politica` tiene unas preguntas y `/mascotas` tiene sus propias preguntas
- Cada canal tiene su propia ruta de administración `/politica/admin` y `/mascotas/admin`

---

Podés clonarlo o usarlo directamentes desde [CodeSandbox](https://codesandbox.io/s/github/goncy/interview-challenges/tree/main/proyectos-take-home/preguntas-anonimas). Una vez que termines alguna de las entregas, compartilo en el canal #feedback del [Discord](https://discord.goncy.dev) para obtener feedback y etiquetame en [Twitter](https://twitter.gonzalopozzo.com) y [LinkedIn](https://linkedin.gonzalopozzo.com) cuando lo compartas así lo re-comparto y obtiene más visibilidad.
