# Tipo de link del primero
Target = "_blank"
## Enfatizar
    <em></em>
### Importancia
    <strong></strong>
#### Enviar formulario
    <form action="/submit-url"></form>
    <form action="https://freecatphotoapp.com/submit-cat-photo">
    </form>
##### Figuras
    <figure><img/><figcaption>Descripcion de la imagen o enfatizar en algo improtante</figcaption></figure>
###### Texto provisionales para indicar q debemos escribir en un formulario
    <input type="text" name="catphotourl" placeholder="cat photo URL">
###### Para que rellenar el input sea obligatorio
    <input type="text" name="catphotourl" placeholder="cat photo URL" required>
###### El comportamiento predeterminado de un botón sin atributos en un formulario es enviar la información a la ubicación especificada en el atributo action del formulario
###### Bóton con preguntas especificas q quieres del usuario
    <input type="radio"> Indoor
###### Formas correctas de hacer un input con texto de referencia (de esta forma los lectores de pantalla funcionan asi q hay q hacerlo para gente q lo utilice)
    <label><input id="indoor" type="radio"> Indoor</label>
###### Para hacer que al seleccionar un radio button, el otro sé deseleccione automáticamente, ambos botones deben tener un atributo name con el mismo valor.
    <label><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label>
###### Si seleccionas el radio button Indoor y envías el formulario, los datos del radio button se basarán en sus atributos name y value. Ya que tus elementos radio button no tienen el atributo value, los datos del formulario se verán así indoor-outdoor=on, lo cual no es útil cuando tienes múltiples radio button.
    <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
###### El elemento fieldset se utiliza para agrupar elementos input y label relacionados dentro de un formulario web. Los elementos fieldset son elementos de nivel de bloque, lo que significa que aparecen en una nueva línea.
    <fieldset>
        <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
        <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
    </fieldset>
###### El elemento legend actúa como una leyenda/descripción, para el contenido del elemento fieldset. Le da a los usuarios un contexto sobre lo que deben ingresar en esa parte del formulario.
    <fieldset>
        <legend>Is your cat an indoor or outdoor cat?</legend>
        <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
        <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
    </fieldset>
###### Los formularios Usualmente usan casillas de verificación (checkboxes-checkbox) para preguntas que puedan tener más de una respuesta. Por ejemplo, aquí hay un checkbox (casilla de verificación) con la opción tacos: <!--<input type="checkbox">--> tacos.
    <input id="loving" type="checkbox"> Loving
###### Hay otra manera de asociar un texto con el elemento input. Puedes anidar un texto dentro de un elemento label y añadirle un atributo for con el mismo valor del atributo id del elemento input.
    <input id="loving" type="checkbox" name="personality"> <label for="loving">Loving</label>
    <input id="lazy" type="checkbox" name="personality"> <label for="lazy">Lazy</label>
    <input id="energetic" type="checkbox" name="personality"> <label for="energetic"> Energetic</label>
###### Al igual que los radio button, los datos de formulario de un checkbox se basan en los atributos name / value. Mientras que el atributo value es opcional, es una buena práctica incluirlo en cualquier checkbox o radio button de una página.
    <input id="loving" type="checkbox" name="personality" value="loving"> <label for="loving">Loving</label>
    <input id="lazy" type="checkbox" name="personality" value="lazy"> <label for="lazy">Lazy</label>
    <input id="energetic" type="checkbox" name="personality" value="energetic"> <label for="energetic"> Energetic</label>
###### Para hacer que un checkbox o un radio button este seleccionado por defecto, necesitas añadir el atributo checked. No hay necesidad de agregarle un valor al atributo checked. Simplemente necesitas añadir la palabra checked al elemento input, asegurándote de que hay espacios entre ella y los otros atributos.