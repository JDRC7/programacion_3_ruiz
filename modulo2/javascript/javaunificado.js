// app.js

// Confirmación en consola de que el script cargó correctamente
console.log("=== SISTEMA CORE: SUPER SANA INICIALIZADO ===");

// Referencias a los elementos del DOM (Document Object Model)
const btnVerificar = document.getElementById("btnVerificar");
const inputNombre = document.getElementById("nombreCliente");
const inputPuntos = document.getElementById("puntosCliente");
const textoResultado = document.getElementById("resultadoNivel");

// Evento de escucha para el botón del formulario
btnVerificar.addEventListener("click", function() {
    
    // Captura de datos ingresados por el usuario
    const nombre = inputNombre.value.trim();
    const puntosCrudos = inputPuntos.value;
    
    // Parseo a número entero (similar a lo usado en los scripts de consola)
    const puntos = parseInt(puntosCrudos, 10);

    // Validación de seguridad para evitar datos vacíos o Not-a-Number (NaN)
    if (!nombre) {
        textoResultado.textContent = "Error: Por favor ingresa el nombre del cliente.";
        textoResultado.style.color = "#b91c1c"; // Rojo para errores
        return; 
    }

    if (isNaN(puntos) || puntos < 0) {
        textoResultado.textContent = "Error: La cantidad de puntos no es válida.";
        textoResultado.style.color = "#b91c1c";
        return;
    }

    // Lógica condicional (if/else) para determinar el nivel y descuento
    console.log(`Evaluando métricas de cliente: ${nombre} | Puntos Totales: ${puntos}`);

    if (puntos >= 500) {
        // Nivel Platino
        textoResultado.textContent = `¡Categoría Platino! ${nombre}, tienes un 25% de descuento en miel e indumentaria oficial.`;
        textoResultado.style.color = "#15803d"; // Verde éxito
        
    } else if (puntos >= 200) {
        // Nivel Oro
        textoResultado.textContent = `¡Categoría Oro! ${nombre}, tienes un 15% de descuento en suplementos orgánicos.`;
        textoResultado.style.color = "#0369a1"; // Azul informativo
        
    } else if (puntos > 0) {
        // Nivel Bronce
        const puntosFaltantes = 200 - puntos;
        textoResultado.textContent = `Cliente Regular. Hola ${nombre}, te faltan ${puntosFaltantes} puntos para alcanzar la Categoría Oro.`;
        textoResultado.style.color = "#b45309"; // Naranja advertencia
        
    } else {
        // Nuevo Cliente
        textoResultado.textContent = `¡Bienvenido a la comunidad Super Sana, ${nombre}! Haz tu primera compra para empezar a acumular beneficios.`;
        textoResultado.style.color = "#4b5563"; // Gris oscuro
    }
});