// Sintaxis completa
const sumar = (a, b) => {
  return a + b;
};

// Retorno implícito — cuando el cuerpo es una sola expresión
// se omiten las llaves y la palabra return
const sumarCorto = (a, b) => a + b;

// Un solo parámetro — se pueden omitir los paréntesis
const doblar = n => n * 2;

// Sin parámetros — los paréntesis son obligatorios
const saludarMundo = () => "Hola, mundo!";

console.log(sumar(3, 4));        // 7
console.log(sumarCorto(3, 4));   // 7
console.log(doblar(5));          // 10
console.log(saludarMundo());     // "Hola, mundo!"

const esPar = n => n % 2 === 0;
console.log(esPar(4)); // true
console.log(esPar(7)); // false

//-------------------------------------------------------------

function saludar(nombre = "mundo", saludo = "Hola") {
  return `${saludo}, ${nombre}!`;
}

console.log(saludar());                     // "Hola, mundo!"
console.log(saludar("Ana"));               // "Hola, Ana!"
console.log(saludar("Ana", "Buenos días")); // "Buenos días, Ana!"

// También funciona con arrow functions
const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(3));     // 9   (3²)
console.log(potencia(3, 3));  // 27  (3³)

//

const areaTriangulo = (base, altura) => (base * altura) /2;
console.log(areaTriangulo(20, 10));

const areaCuadrado = lado => lado **2;
console.log(areaCuadrado(40));


//--------------------------------------------------------------------

// ...numeros captura todos los argumentos en un array
function sumarTodos(...numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3));          // 6
console.log(sumarTodos(1, 2, 3, 4, 5));   // 15
console.log(sumarTodos());                 // 0

// Se puede combinar con parámetros normales
// el rest SIEMPRE debe ser el último parámetro
function registrar(categoria, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${categoria}] ${msg}`);
  }
}

registrar("INFO", "Inicio", "Conexión OK", "Listo");
// [INFO] Inicio
// [INFO] Conexión OK
// [INFO] Listo



function mostrarPersona (nombre, ...datos) {
  console.log(`Nombre: ${nombre}`);
  for (const dato of datos) {
    console.log(`- ${dato}`);
  }
}



const celsius = [0, 15, -5, 22, 37, 100, -10, 28];


const fahrenheit = celsius.map(c => (c * 9/5) + 32);

const filtrados = fahrenheit.filter(f => f >= 0 && f <= 30);

console.log(filtrados);




