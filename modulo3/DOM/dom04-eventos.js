// 1. Cambia el contenido del botón usando el texto del H2
function cambiarBotonDesdeH2(elementoH2) {
    const boton = document.getElementById("botonDinamico");
    const textoDelH2 = elementoH2.innerText;
    boton.innerText = textoDelH2;
}

// 2. Cambia el título de la página con el texto de este botón (Antiguo cambiartexto)
function cambiarTextoTitulo(elementoBoton) {
    const titulo = document.getElementById("titulo");
    titulo.innerText = elementoBoton.innerText;
    alert("¡Texto del título cambiado!");
}

// 3. Agrega producto a la lista 1 (Corregido el ID a 'lista-productos1')
function agregarProducto() {
    const listaProductos = document.getElementById("lista-productos1"); 
    const nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = "Nuevo Producto de forma tradicional";
    listaProductos.appendChild(nuevoProducto);
}

// 4. Escucha moderna usando addEventListener (Quitamos el onclick del HTML para el botón 3)
// Como usamos 'defer' en el HTML, este código corre de forma segura cuando el botón ya existe.
document.getElementById('btn3').addEventListener('click', function() {
    const lista2 = document.getElementById("lista-productos2");
    const nuevoProducto2 = document.createElement("li");
    nuevoProducto2.textContent = "Producto con EventListener";
    lista2.appendChild(nuevoProducto2);
});