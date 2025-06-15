Step 8

Notice how the blue image border extends beyond the red gallery border. This is due to the way browsers calculate the size of container elements.

The box-sizing property is used to set this behavior. By default, the content-box model is used. With this model, when an element has a specific width, that width is calculated based only on the element's content. Padding and border values get added to the total width, so the element grows to accommodate these values.

Try setting box-sizing to content-box explicitly, with the global * selector. At this point, you will not see any changes, because you are using the default value.

Step 9

The border-box sizing model does the opposite of content-box. The total width of the element, including padding and border, will be the explicit width set. The content of the element will shrink to make room for the padding and border.

Change the box-sizing property to border-box. Notice how your blue image borders now fit within your red gallery border.

Step 14

Flexbox is a one-dimensional CSS layout that can control the way items are spaced out and aligned within a container.

To use it, give an element a display property of flex. This will make the element a flex container. Any direct children of a flex container are called flex items.

Create a .gallery selector and make it a flex container.

Step 15

Flexbox tiene un eje principal y otro transversal. El eje principal está definido por la propiedad flex-direction, que tiene cuatro valores posibles:

    row (por defecto): eje horizontal con elementos flex de izquierda a derecha
    row-reverse: eje horizontal con elementos flex de derecha a izquierda
    column: eje vertical con elementos flexibles de arriba a abajo
    column-reverse: eje vertical con elementos flexibles de abajo a arriba

Nota: Los ejes y direcciones serán diferentes dependiendo de la dirección del texto. Los valores mostrados son para una dirección de texto de izquierda a derecha.

Pruebe los diferentes valores para ver como afectan al diseño.

Cuando hayas terminado, establece un flex-direction explícito de row en el elemento .gallery.

Step 16

La propiedad flex-wrap determina como se comportan tus elementos flex cuando el contenedor flex es demasiado pequeño. Si se establece como wrap, los elementos se colocan en la siguiente fila o columna. nowrap (por defecto) evitará que los elementos se coloquen en varias líneas y los encogerá si es necesario.

Haga que sus elementos flexibles se coloquen en la siguiente fila cuando se queden sin espacio.

Step 17

La propiedad justify-content determina cómo se posicionan los elementos dentro de un contenedor flex a lo largo del eje principal, afectando a su posición y al espacio que los rodea.

Dale a tu selector .gallery una propiedad justify-content con el valor center.

Step 18

La propiedad align-items posiciona el contenido flex a lo largo del eje transversal. En este caso, con tu flex-direction establecido en row, el eje transversal sería vertical.

Para centrar verticalmente tus imágenes, dale a tu selector .gallery una propiedad align-items con el valor center.

Step 20

Observe como algunas de sus imágenes se han distorsionado. Esto se debe a que las imágenes tienen diferentes relaciones de aspecto. En lugar de establecer cada relación de aspecto individualmente, puedes utilizar la propiedad object-fit para determinar como deben comportarse las imágenes.

Dale a tu selector .gallery img la propiedad object-fit establecida en cover. Esto le dirá a la imagen que llene el contenedor img mientras mantiene la relación de aspecto, lo que resulta en un recorte para ajustarse.

Step 21

Tus imágenes necesitan algo de espacio entre ellas.

The gap CSS shorthand property sets the gaps, also known as gutters, between rows and columns. La propiedad gap y sus subpropiedades row-gap y column-gap proporcionan esta funcionalidad para los diseños flex, grid, y multicolumna. La propiedad se aplica al elemento contenedor.

Dale a tu contenedor flex .gallery una propiedad gap con un valor de 16px.

Step 23

El pseudo-elemento ::after crea un elemento que es el último hijo del elemento seleccionado. Puedes hacer uso de él para añadir un elemento vacío a continuación de la ultima imagen. Si en su propiedad width se le asigna el mismo valor que tiene en las imágenes, empujará la última imagen hacia la izquierda cuando la galería tenga un diseño de dos columnas. En este momento, está en el centro porque se ha establecido justify-content: center en el contenedor flex.

Ejemplo:

.container::after {
  content: "";
  width: 860px;
}

Cree un nuevo selector utilizando un pseudo-elemento ::after en el elemento .gallery. Añade una propiedad content establecida a una cadena vacía "" y 350px establecidos para la propiedad width.
