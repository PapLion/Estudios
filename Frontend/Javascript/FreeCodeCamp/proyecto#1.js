const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para realizar operaciones matemáticas
function operacionesMatematicas(x, y) {
  let suma = x + y;
  let resta = x - y;
  let multiplicacion = x * y;
  let division = x / y;

  console.log(`Suma: ${suma}`);
  console.log(`Resta: ${resta}`);
  console.log(`Multiplicación: ${multiplicacion}`);
  console.log(`División: ${division}`);
}

// Función para trabajar con texto
function manipularTexto(texto) {
  let longitud = texto.length;
  let recorte = texto.slice(2, 9);
  let reemplazo = texto.replace("ola andres", "Hola Felipe");
  let textoMayusculas = texto.toUpperCase();
  let textoMinusculas = texto.toLowerCase();
  let textoLimpio = texto.trim();

  console.log(`Longitud del texto: ${longitud}`);
  console.log(`Recorte del texto: ${recorte}`);
  console.log(`Reemplazo del texto: ${reemplazo}`);
  console.log(`Texto en mayúsculas: ${textoMayusculas}`);
  console.log(`Texto en minúsculas: ${textoMinusculas}`);
  console.log(`Texto limpio: ${textoLimpio}`);
}

// Función para evaluar un string como expresión matemática
function evaluarExpresionMatematica(expresion) {
  try {
    let resultado = eval(expresion);
    console.log(`Resultado de la expresión: ${resultado}`);
  } catch (error) {
    console.error("Error al evaluar la expresión.");
  }
}

// Función para manipular un objeto literal
function manipularObjeto(objeto) {
  console.log("Propiedades del objeto:");
  for (let key in objeto) {
    console.log(`${key}: ${objeto[key]}`);
  }
}

// Interacción con el usuario
rl.question("Ingrese dos números separados por espacio: ", (numerosInput) => {
  const [num1, num2] = numerosInput.split(' ').map(Number);

  operacionesMatematicas(num1, num2);

  rl.question("Ingrese un texto: ", (textoInput) => {
    manipularTexto(textoInput);

    rl.question("Ingrese una expresión matemática: ", (expresionInput) => {
      evaluarExpresionMatematica(expresionInput);

      const objetoLiteral = {
        Nombre: "Ejemplo",
        Edad: 25,
        Ciudad: "Ciudad Ejemplo"
      };

      manipularObjeto(objetoLiteral);

      rl.close();
    });
  });
});
