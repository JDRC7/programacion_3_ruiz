//usa map para convertir a Fahrenheit Formula: (c*9/5) +32 
// usa filter para quedarte solo con las temperaturas celsius 
// entre 0 y 30 encadena filter + map: filltra las que esten entre 0 y 30 
// y conviertelas a fahrenheit

const celsius = [0, 13, -5, 22, 100, -10, 28];

// 1. Usar map para convertir a Fahrenheit
const fahrenheit = celsius.map(c => (c * 9/5) + 32);

console.log("Temperaturas en Fahrenheit:");
console.log(fahrenheit);

// 2. Usar filter para quedarte solo con temperaturas entre 0 y 30
const entre0y30 = celsius.filter(c => c >= 0 && c <= 30);

console.log("Temperaturas entre 0 y 30:");
console.log(entre0y30);

// 3. Encadenar filter + map
const convertidas = celsius
    .filter(c => c >= 0 && c <= 30)
    .map(c => (c * 9/5) + 32);

console.log("Entre 0 y 30 convertidas a Fahrenheit:");
console.log(convertidas);

//

