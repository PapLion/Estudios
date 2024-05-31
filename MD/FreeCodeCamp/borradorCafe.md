# Next, you want to center the #menu horizontally. Puedes hacer esto, dándole el valor auto a las propiedades margin-left y margin-right (margen-izquierdo y margen-derecho). Piensa en el margen como un espacio invisible alrededor de un elemento. Using these two margin properties, center the #menu element within the body element.
    #menu {
        /*width: 80%;*/
        /* background-color: burlywood;*/
        margin-left:auto;
        margin-right:auto;
    }
## Para q 2 textos de un mismo bloque esten alineados a izquierda y derecha de su container se usaria text-align y los lados correspondeintes y para q esten en la misma linea se usa display:inline-block al su propio contenedor y luego agregales un witdh del % q necesites pa q no esten pegados
    contenedor:
    .item p {
        display: inline-block;
    }
    .flavor {
        text-align: left;
        width: 25%;
    }

    .price {
        text-align: right;
        width: 25%;
    }
### Para algo de espaciado interno o en este caso de la "pared" de el div y el texto se usaria padding

#### Para cambiar las propiedades de un enlace cuando el enlace ya ha sido visitado utilizas un pseudo-selector, el cual luce así a:visited { propertyName: propertyValue; }.

##### Para hacer que la imagen se comporte como un elemento título (elementos de tipo bloque), crea un selector de tipo img y añádele una propiedad display con el valor block

###### se puede poner numeros negativos en los valores