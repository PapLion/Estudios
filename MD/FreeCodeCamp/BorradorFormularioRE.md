# buen color para fondo de paginas
    background-color:#1b1b32;
## El atributo method especifica cómo enviar datos de formulario a la dirección URL especificada en el atributo action. Los datos del formulario se pueden enviar a través de una solicitud GET como parámetros de URL (con method="get") o mediante una solicitud POST como datos en el cuerpo de la solicitud (con method="post").Establezca el atributo method para enviar los datos del formulario a través de una solicitud POST.
    <form method="post" action='https://register-demo.freecodecamp.org' ></form>
### La unidad rem significa root (raíz) em, y es relativa al tamaño de fuente del elemento html.Como los elementos label por defecto son inline, se muestran todos juntos en la misma línea, haciendo difícil su lectura. Para mostrarlos en diferentes líneas, añade display: block al elemento label, y dale a la propiedad margin un valor de 0.5rem 0, para darles un poco de separación.
    label {
        display: block;
        margin: 0.5rem 0;
    }
#### Con el type="password" puedes usar el atributo pattern para definir una expresión regular que la contraseña debe coincidir para ser considerada válida.Agrega un atributo pattern al elemento input de contraseña para requerir que la entrada coincida con: [a-z0-5]{8,} Lo anterior es una expresión regular que coincide con ocho o más letras minúsculas o los dígitos del 0 al 5. Luego, elimina el atributo minlength, y pruébalo.
    <label for="new-password">Create a New Password: <input id="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
##### Enviar el formulario con una opción seleccionada no enviaría un valor útil al servidor. Por lo tanto, cada elemento option necesita que se le dé un atributo value. Sin el cual, el contenido de texto del option será enviado al servidor.Dale al primer option un value de "", y a los elementos option subsecuentes atributos value del 1 al 4.
          <select>
            <option value="">(select one)</option>
            <option value="1">freeCodeCamp News</option>
            <option value="2">freeCodeCamp YouTube Channel</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
###### El elemento textarea actúa como un elemento input de tipo text, pero viene con la ventaja añadida de poder recibir texto de varias líneas, y un número inicial de filas y columnas.

###### El borde del último elemento fieldset se ve un poco fuera de lugar. Puedes seleccionar el último elemento de un tipo específico utilizando la pseudo-clase CSS last-of-type, de esta manera:
    fieldset:last-of-type {
        border-bottom: none;
    }
###### Para dar estilo al botón de envío, puede utilizar un selector de atributos (attribute), que selecciona un elemento basado en el valor del atributo dado. Aquí hay un ejemplo:

input[name="password"]

Lo anterior selecciona los elementos input con un atributo name con el valor password.