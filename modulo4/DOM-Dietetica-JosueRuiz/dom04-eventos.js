function cambiarBotonDesdeH2(elemento) {
    const boton = document.getElementById("botonDinamico");
    boton.textContent = "Disponibilidad: Pan Integral en Stock";
}

function cambiarTextoTitulo(elemento) {
    alert("¡Descuento de Dietética Activado!");
}

function agregarProducto() {
    const lista = document.getElementById("lista-productos1");
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = "Almendras Guara x 250g";
    lista.appendChild(nuevoItem);
}

document.addEventListener("DOMContentLoaded", function() {
    const btn3 = document.getElementById("btn3");
    const lista2 = document.getElementById("lista-productos2");

    btn3.addEventListener("click", function() {
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = "Proteína Orgánica de Arveja x 500g";
        lista2.appendChild(nuevoItem);
    });
});