// funciones-basicas.ts

// Recibe dos números, devuelve número
function multiplicar(a: number, b: number): number {
  return a * b;
}

// Recibe un string, devuelve string
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

// Recibe un número, devuelve boolean
function esPar(n: number): boolean {
  return n % 2 === 0;
}

// No devuelve nada — tipo void
function mostrar(mensaje: string): void {
  console.log(`[INFO] ${mensaje}`);
}

console.log(multiplicar(4, 7));    // 28
console.log(saludar("Ana"));       // Hola, Ana!
console.log(esPar(10));            // true
console.log(esPar(7));             // false
mostrar("Todo listo");             // [INFO] Todo listo

// parametros-opcionales.ts

// ? hace el parámetro opcional — dentro puede ser undefined
// Necesitas el if para manejarlo de forma segura
function presentar(nombre: string, edad?: number, ciudad?: string): string {
  let resultado = `Me llamo ${nombre}`;

  if (edad !== undefined) {
    resultado += ` y tengo ${edad} años`;
  }

  if (ciudad !== undefined) {
    resultado += `, vivo en ${ciudad}`;
  }

  resultado += ".";
  return resultado;
}

console.log(presentar("Ana"));
console.log(presentar("Ana", 28));
console.log(presentar("Ana", 28, "Madrid"));
// Me llamo Ana.
// Me llamo Ana y tengo 28 años.
// Me llamo Ana y tengo 28 años, vivo en Madrid.

// Función de búsqueda — retorna null si no encuentra
function buscarProducto(
  productos: string[],
  busqueda: string,
  exacto?: boolean
): string | null {
  for (const producto of productos) {
    if (exacto) {
      // Búsqueda exacta
      if (producto === busqueda) return producto;
    } else {
      // Búsqueda parcial (contiene el texto)
      if (producto.toLowerCase().includes(busqueda.toLowerCase())) {
        return producto;
      }
    }
  }
  return null;  // no encontró nada
}

const catalogo = ["Laptop Pro", "Teclado Mecánico", "Monitor 4K", "Ratón Inalámbrico"];

console.log(buscarProducto(catalogo, "laptop"));         // Laptop Pro
console.log(buscarProducto(catalogo, "laptop", true));   // null (exacto, no coincide)
console.log(buscarProducto(catalogo, "Teclado Mecánico", true)); // Teclado Mecánico
console.log(buscarProducto(catalogo, "tablet"));         // null

// parametros-por-defecto.ts

// Si no se pasa el argumento, usa el valor por defecto
// El tipo ya está garantizado — no necesitas verificar undefined
function calcularDescuento(
  precio: number,
  porcentaje: number = 10,
  aplicarIVA: boolean = true
): number {
  let precioFinal = precio * (1 - porcentaje / 100);

  if (aplicarIVA) {
    precioFinal *= 1.21;
  }

  return precioFinal;
}

const precio = 100;
console.log(calcularDescuento(precio));               // 108.9  (10% desc + IVA)
console.log(calcularDescuento(precio, 20));           // 96.8   (20% desc + IVA)
console.log(calcularDescuento(precio, 20, false));    // 80     (20% desc, sin IVA)

// Función con bucle y valor por defecto
function repetirMensaje(mensaje: string, veces: number = 3): void {
  for (let i = 1; i <= veces; i++) {
    console.log(`[${i}/${veces}] ${mensaje}`);
  }
}

repetirMensaje("Hola");           // lo repite 3 veces
repetirMensaje("Urgente", 5);     // lo repite 5 veces