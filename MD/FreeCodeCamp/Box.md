Paso 22

Agregar 1 píxel de relleno a la parte superior, inferior, izquierda y derecha del lienzo cambió sus dimensiones a 502 píxeles x 602 píxeles.

Reemplace la propiedad padding por overflow establecida en hidden - Cambiar el lienzo a sus dimensiones originales.

Paso 34

Los colores y las formas de su pintura son demasiado nítidos para pasar como un Rothko.

Utilice la propiedad filter para blur la pintura por 2px en el elemento .canvas.

Aquí hay un ejemplo de una regla que agrega un 3px blur:

p {
  filter: blur(3px);
}

Paso 37

Los rectángulos son demasiado pequeños y sus bordes no tienen la calidad suave de una pintura.

Aumente el área y suavice los bordes de .one estableciendo su box-shadow en 0 0 3px 3px #efb762.

Paso 43

Gire cada rectángulo para darles un aspecto más imperfecto y pintado a mano.

Utilice la propiedad transform del selector .one para rotate en sentido contrario a las agujas del reloj en 0,6 grados.
