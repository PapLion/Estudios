//Repaso de JAVASCRIPT
//Declaraciones y asignaciones
/*
= Operador de Asignación
Var => Declarador para putos bots ancianos
Let => Goty de gotys
Const => Constantes god 
*/

let pedro = "satanas";
let x, y, z; //Declaración multiple ez
x = 3;
y = 5;
z = 7;

x = 3;
y = 5;
z = 7;

//Scope pe
y = "xd";
{
  x = 3;
  z = y + x;
}

// z=x+y esta basura no se puede pq x se asigno adentro de otro bloque ez
let texto = `Con este texto se puede usar variables xd osea lol y = ${y}`;
texto = "pedrito es 'Andres'";
texto = 'pedrito es "Andres"';

//Tipos de dato
//Primitivos
let e = "string";
e = Boolean;
e = Number;

e = "4";
x = parseInt(e);

//No-Primitivos
e = Int16Array; //Entre otros
e = Float32Array; //Entre otros
e = true;
e = false;
e = undefined; //NO ESTA DEFINIDO EL TIPO DE DATO
e = null; //EL VALOR DE DATO ES NULO
e = Date();

//Operadores
function operadores(x,y){
    x = 3;
    y = 5;
    let z = x+y;
    z = x-y;
    z = x%y;
    z = x/y;
    z = x*y;
    z = x**y;
    z++;
    z--;
}

//Operadores lógicos
// Definir dos variables
var numero_1 = 10;
var numero_2 = 5;

// Utilizar la instrucción if con operadores lógicos
if (numero_1 > numero_2 && numero_1 % 2 === 0) {
    console.log("Número 1 es mayor que Número 2 y Número 1 es par.");
}

if (numero_2 !== 0 || numero_1 / numero_2 > 2) {
    console.log("Número 2 no es cero o la división de Número 1 entre Número 2 es mayor que 2.");
}

if (!(numero_1 < 0)) {
    console.log("Número 1 no es negativo.");
}   

//Funciones
function sum(x,y){
    //Retorna un valor
    return x + y
}

function sum(x,y){
    //No retorna un valor
    console.log(x+y)
}

//arrow fun
const waos = () =>{
    return "ola mundo"
}

const waos2 = (num1,num2) =>{
    return num1 + num2
}

//Objetos(literales)
const CLIENT ={
    Name:"waos",
    Edad:35,
    Id:95,
}

//Dom
// cambiar elemento de html
//document.getElementById("h1").innerHTML="Esto ahora usa javascript";

//JavaScript escucha eventos (espera a que se ejecute un evento)
//function onClick(){
//    document.getElementById("h1").innerHTML(Date());
//}

//String
texto = "ola andres \"dame de tu pepsi\""; //Asi sale las "" 

/**
 * \t tabeo
 * \n salto de linea
 * \b Elimina un espacio
 */

let cantidad = texto.length; 

/**
 * Slice(comienzo, final)
 */

let recorte = texto.slice(2,9);

let reemplazo = texto.replace("ola andres", "Hola Felipe")

let case3 = texto.toLowerCase;
case3 = texto.toUpperCase;

let texto2 = "  xd  ";
let texto3 = "  :v  ";

let texto2re = texto2.trim();
let texto3re = texto3.trim();

/**
 * Se puede limpiar los espacios de atras o solo de adelante con trim tmb trim()
 * trimStart()
 * trimEnd()
 */

let concatenado = texto.trim().concat(texto2re,texto3re);

let txtSeparado = "este texto. es muy. goty."; //Esto devolvera un array con split
let xd = txtSeparado.split(". ");
let manaos = txtSeparado.split(""); //separa cada letra

/**
 * Agarra un string y evalua su valor matematico eval()
 */

//CON LO DE ARRIBA SE CREARA EL PROYECTO#1

//Arrays
const realArray = new Array(4); //Crea una array vacia
realArray[0]="waos";
realArray[1]="waos";
realArray[2]="waos";
realArray[3]="waos";

console.log(realArray.length)

/**
 * sort() Ordena alfabeticamente o por numeros el array
 */

texto = "";
for (let index = 0; index < array.length; index++) {
    texto = `<li>${array[index]}</li>`    
}
document.getElementsByTagName("ul").innerHTML = texto;

// Crear un array inicial
let miArray = [1, 2, 3, 4, 5];

// Agregar elementos al final del array con push()
miArray.push(6);
miArray.push(7);

// Agregar elementos al principio del array con unshift()
miArray.unshift(0);
miArray.unshift(-1);

console.log("Array después de push() y unshift():", miArray);

// Filtrar elementos mayores que 2 con filter()
let arrayFiltrado = miArray.filter(elemento => elemento > 2);
console.log("Array filtrado:", arrayFiltrado);

// Duplicar cada elemento del array con map()
let arrayDuplicado = miArray.map(elemento => elemento * 2);
console.log("Array duplicado:", arrayDuplicado);

// Llenar el array con el valor 10 con fill()
let arrayLlenado = miArray.fill(10);
console.log("Array llenado:", arrayLlenado);

// Encontrar el primer elemento igual a 3 con find()
let elementoEncontrado = miArray.find(elemento => elemento === 3);
console.log("Elemento encontrado:", elementoEncontrado);

// Encontrar el índice del primer elemento igual a 3 con findIndex()
let indiceEncontrado = miArray.findIndex(elemento => elemento === 3);
console.log("Índice encontrado:", indiceEncontrado);

// Verificar si hay algún elemento mayor que 8 con some()
let algunMayorQue8 = miArray.some(elemento => elemento > 8);
console.log("¿Alguno mayor que 8?", algunMayorQue8);

// Verificar si todos los elementos son mayores que 0 con every()
let todosMayoresQue0 = miArray.every(elemento => elemento > 0);
console.log("¿Todos mayores que 0?", todosMayoresQue0);

// Eliminar el último elemento con pop()
let ultimoElemento = miArray.pop();
console.log("Elemento eliminado con pop():", ultimoElemento);
console.log("Array después de pop():", miArray);

// Eliminar el primer elemento con shift()
let primerElemento = miArray.shift();
console.log("Elemento eliminado con shift():", primerElemento);
console.log("Array después de shift():", miArray);

// Utilizar splice() para insertar elementos en el medio del array
miArray.splice(2, 0, 3, 6);
console.log("Array después de splice():", miArray);

// Utilizar split() para dividir un string en un array
let miString = "Hola,esto,es,un,ejemplo";
let arrayDesdeString = miString.split(",");
console.log("Array desde string:", arrayDesdeString);

// Utilizar join() para unir elementos de un array en un string
let stringDesdeArray = miArray.join("-");
console.log("String desde array:", stringDesdeArray);

// Utilizar concat() para concatenar arrays
let nuevoArray = miArray.concat([7, 9]);
console.log("Nuevo array concatenado:", nuevoArray);

// Utilizar sort() para ordenar el array
miArray.sort((a, b) => a - b);
console.log("Array ordenado:", miArray);

//Date
// Obtener la fecha y hora actual
const fechaActual = new Date();

// Obtener el año, mes, día, hora, minutos y segundos por separado
const año = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1; // ¡Recuerda que los meses van de 0 a 11!
const dia = fechaActual.getDate();
const hora = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();

// Crear una cadena de texto con la fecha y hora formateadas
const formatoFecha = `${dia}/${mes}/${año}`;
const formatoHora = `${hora}:${minutos}:${segundos}`;

// Mostrar la fecha y hora en la consola
console.log("Fecha actual:", formatoFecha);
console.log("Hora actual:", formatoHora);

//Formato: AAAA-MM-DD
let olachavoxd = new Date("2022-01-01");

//Math
// Definir constantes matemáticas
// Definir constantes matemáticas
const pi = Math.PI;
const euler = Math.E;
const sqrt2 = Math.SQRT2;
const sqrtHalf = Math.SQRT1_2;
const ln2 = Math.LN2;
const ln10 = Math.LN10;
const log2e = Math.LOG2E;
const log10e = Math.LOG10E;

const redondeo = Math.round(pi);
const redondeoArriba = Math.ceil(pi);
const redondeoAbajo = Math.floor(pi);
const absoluto = Math.abs(-pi);
const potencia = Math.pow(pi, 2);
const raizCuadrada = Math.sqrt(pi);
console.log(Math.random().round()) //se agrega *num para q llegue hasta ahi y usualmente da floats asi que hay q redondear

// Mostrar las constantes en la consola
console.log("Valor de pi:", pi);
console.log("Valor de e:", e);
console.log("Raíz cuadrada de 2:", sqrt2);
console.log("Raíz cuadrada de 1/2:", sqrtHalf);
console.log("Logaritmo natural de 2:", ln2);
console.log("Logaritmo natural de 10:", ln10);
console.log("Logaritmo de e en base 2:", log2e);
console.log("Logaritmo de e en base 10:", log10e);

//Condicionales
//If normal
if (hora < 12) {
    console.log("Buenos días.");
} else if (hora < 18) {
    console.log("Buenas tardes.");
} else {
    console.log("Buenas noches.");
}

//En variable
let edad = 20;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

//Swicht normal
let nombreDia;

switch (dia) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    default:
        nombreDia = "Día no válido";
}
console.log("Hoy es " + nombreDia);

//falltrhough
let num = 2;
let mensajeNum;

switch (num) {
    case 1:
    case 2:
    case 3:
        mensajeNum = "Es un número pequeño.";
        break;
    case 4:
    case 5:
    case 6:
        mensajeNum = "Es un número mediano.";
        break;
    default:
        mensajeNum = "Es un número grande.";
}
console.log(mensajeNum);

//Con lo de arriba se hace el proyecto # 2

//Bucles
//For
// Bucle for básico
for (let i = 0; i < 5; i++) {
    console.log(`Bucle for básico: ${i}`);
  }
  
  // Bucle for con decremento
  for (let i = 5; i > 0; i--) {
    console.log(`Bucle for con decremento: ${i}`);
  }
  
  // Iteración sobre un array
  const array = [1, 2, 3, 4, 5];
  for (let i = 0; i < array.length; i++) {
    console.log(`Iteración sobre un array: ${array[i]}`);
  }
  
  // Iteración sobre un array en reversa
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(`Iteración sobre un array en reversa: ${array[i]}`);
  }
  
  // Iteración sobre cada elemento de un array con for...of
  for (const elemento of array) {
    console.log(`Iteración sobre un array con for...of: ${elemento}`);
  }
  
  // Iteración sobre cada índice y elemento de un array con entries()
  for (const [indice, elemento] of array.entries()) {
    console.log(`Iteración con entries(): Índice: ${indice}, Elemento: ${elemento}`);
  }
  
  // Iteración sobre las propiedades de un objeto
  const objeto = { a: 1, b: 2, c: 3 };
  for (const propiedad in objeto) {
    console.log(`Iteración sobre las propiedades de un objeto: ${propiedad}: ${objeto[propiedad]}`);
  }
  
  // Bucle infinito (con condición de salida)
  let condicionDeSalida = false;
  for (;;) {
    console.log("Bucle infinito (útil con condición de salida)");
    if (condicionDeSalida) {
      break;
    }
  }
  
  // Uso de múltiples variables en la declaración
  for (let i = 0, j = 10; i < 5 && j > 5; i++, j--) {
    console.log(`Uso de múltiples variables: i: ${i}, j: ${j}`);
  }
  
  // Bucle while
let contadorWhile = 0;

while (contadorWhile < 5) {
  console.log(`Bucle while: ${contadorWhile}`);
  contadorWhile++;
}

console.log("Fin del bucle while");

// Bucle do while
let contadorDoWhile = 0;

do {
  console.log(`Bucle do while: ${contadorDoWhile}`);
  contadorDoWhile++;
} while (contadorDoWhile < 5);

console.log("Fin del bucle do while");

//Sets y Mpas
//No se repiten las cosas de adentro
let conjunto = new Set(["xd",2,"14","jajaa"]);

conjunto.add(add("xd"));
conjunto.add(2);
conjunto.add("14");
conjunto.add("jajaa");

conjunto.has("xd");
conjunto.has(2)
conjunto.has("14");
conjunto.has("jajaa");
console.log(conjunto);

console.log(conjunto);

let arrayx = [1,1,1,1,3,2,5,5,5,2,3]

let limpiar = new Set(arrayx)

//Lo volvemos a pasar a array
let arrayxlimpio = [...limpiar]
//Tmb hace q los arrys (sus propiedades) no se dupliquen

//Map
/**
 * Has
 * Size
 * Delete()
 * set()
 */

let mapa = new Map([
  ["ola", 10],
  ["xd", 5]
])

//Type & instace of
//STRING
let s = typeof "string";
//NUMBER
let n = typeof 3.5;
//NUMBER (CASO ESPECIAL)
let na = typeof NaN;
//BOOLEAN
let bo = typeof true;
//OBJETCO (CASO ESPECIAL)
let ar = typeof [1,2,3];
//OBJETO
let ob = typeof {curso: "andre"};
//OBJETO (CASO ESPECIAL)
let ne = typeof new Set(); //Todo lo q lleve new es un objeto
//FUNCION
let fu = typeof function(){};
//UNDEFINED (por error)
let vau = typeof ola;
//OBJETO (CASO ESPECIAL)
let nu = typeof null;

//Instanceof
//Solo sirve para los objetos
let ke = [2,3,2,3,2,3]
console.log(ke instanceof Array)

//Convertir datos
//String a number
//Number, parseInt, parseFloat
let k = Number("1")

//Number a string
let b = String(4)
let i = 3
let f = i.toString()

//Dates a number
let c = new Date()
let m = Number(c)

//Dates a string
m = String(c)

//Number a boolean & string a boolean
let q = Boolean(0);
q = String(true) 

//Regex
// /patern/modificador
let textox = "lorem lorem lorem lorem lorem lorem lorem lorem xd"
let busquedaConRegex = textox.search(/lorem/i) //I es un modificador
/**
 * Modificadores
 *  i : ignora entre mayus y minus
 * g: buscar en todo el texto pasado
 * m: busqueda multilinea
 */
let patern = /lorem/
let res = patern.exec(textox)
patern = /[0-9]/ //Buscar en un rango
res = patern.test(textox)
//Patron para correos electronicos (lo q usualmente mas se usa con regex)
//Buscar en google

//Try/Catch/Finally //Throw significa lanzar
//Todo esto es sincrono
try{
  //Intenta ejecutar x cosa
  //Hacemos una funcion asyncrona
  setTimeout(() => {
    console.log("EEEEOOOO")
    //Si ponemos el error aca el catch no nos funcionara
  }, 300); //Milisegundos
  throw("Lanzamos un error aunque todo funcione")
  //Lo que este debajo dle throw no se ejecutara
}catch(error){
  //Si falla tomamos el error y hacemos lo que queramos
  console.log(error)
}finally{
  //Se ejecuta siempre
}

//CallBack
function mostrarEnConsola(num){
  console.log(num)
}

function sumaConsola(x,y,CallBack){
  let suma = x + y;
  CallBack(suma)
}

sumaConsola(1,3,mostrarEnConsola);

//Promesas
let promesa = new Promise((response,PromiseRejection) =>{
  let res = {
    description
  }
  response("salio todo bien")
  PromiseRejection("error")
})

promesa.then(res => {
  console.log(res)
}).catch(error => {
  console.error(error)
})