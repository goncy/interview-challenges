# EntrevistAIdor
Buscar trabajo es un trabajo y conseguir entrevistas es difícil, entonces queremos estar preparados para cuando llegue el momento. Para eso, vamos a crear nuestro propio bot entrevistAIdor.

### Requisitos
- Ver un botón en el medio de la pantalla que al clickearlo, nos permita grabar un mensaje y al clickearlo devuelta, deje de grabar y envíe ese mensaje al entrevistAIdor.
- Luego de enviar el mensaje, el entrevistAIdor nos debería contestar con voz.
- Al clickear el botón mientras el entrevistAIdor está hablando, debería interrumpirlo y comenzar a grabar nuestro mensaje.

## Extras
- Permitir al usuario escribir mensajes en vez de grabarlos.
- Mostrar el historial de mensajes enviados y recibidos.
- En vez de tener un botón en el centro para grabar, detectar cuando se está hablando y grabar automáticamente, enviar el mensaje cuando se deje de hablar e interrumpir al entrevistAIdor si se detecta que estamos hablando.
- Permitir que el usuario pueda elegir entre distintos entrevistAIdores. Tanto de tema como de voz.

## Recomendaciones
- Podés usar [Ollama](https://ollama.com/) y su API REST para obtener las respuestas del entrevistAIdor. El modelo `llama3` funciona bastante bien.
- Podés usar [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) para convertir audio a texto y texto a audio.
- Si usas Microsoft Edge, las voces del sintetizador son (más y) mucho mejores.

Podés clonarlo o usarlo directamentes desde [CodeSandbox](https://codesandbox.io/s/github/goncy/interview-challenges/tree/main/proyectos-take-home/entrevistaidor)
