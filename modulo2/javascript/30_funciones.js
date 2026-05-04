//Funcion Declarada
function saludo(){
    console.log("Hola Mundo");
}

saludo(); // "Hola Mundo"

//Funcion Expresad

const saludarHola =  function(){
    console.log("hola con funcion expresada")
}
saludarHola();
//funcion Flecha
const saludarFlecha = () => {
    console.log("Hola con funcion flecha");
}
saludarFlecha();

//Funcion Anonima
setTimeout(function() {
    console.log("Ejecutando........")
}, 1000);


//funcion con parametros

function saludarConParametros(nombre, edad) {
    console.log(`Hola, ${nombre}! Tienes ${edad} años.`);
}
saludarConParametros("Ana", 25);
saludarConParametros("Luis", 30);

// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Ana"));   // "Hola, Ana!"
console.log(saludar("Luis"));  // "Hola, Luis!"