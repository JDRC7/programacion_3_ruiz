const productos = [
    {
        id: 1,
        nombre: "Teclado",
        descripcion: "Teclado mecánico",
        precio: 10.99
    },
    {
        id: 2,
        nombre: "Mouse",
        descripcion: "Mouse inalámbrico",
        precio: 19.99
    },
    {
        id: 3,
        nombre: "Monitor",
        descripcion: "Monitor 19 pulgadas",
        precio: 5.49
    }
];

let idEditar = null;

const agregarBtn = document.getElementById("agregarBtn");
const cancelarBtn = document.getElementById("cancelar");

function renderProductos() {

    const cuerpoTabla = document.getElementById("cuerpoTabla");

    cuerpoTabla.innerHTML = "";

    productos.forEach(producto => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>
                <button
                    class="editar"
                    onclick="editarProducto(${producto.id})">
                    Editar
                </button>

                <button
                    class="eliminar"
                    onclick="eliminarProducto(${producto.id})">
                    Eliminar
                </button>
            </td>
        `;

        cuerpoTabla.appendChild(fila);
    });
}

function limpiarFormulario() {

    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
}

function agregarProducto() {

    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const precio = document.getElementById("precio").value.trim();

    if (!nombre || !descripcion || !precio) {
        alert("Debe completar todos los campos.");
        return;
    }

    const nuevoProducto = {
        id: productos.length > 0
            ? Math.max(...productos.map(p => p.id)) + 1
            : 1,
        nombre,
        descripcion,
        precio: parseFloat(precio)
    };

    productos.push(nuevoProducto);

    renderProductos();
    limpiarFormulario();
}

function editarProducto(id) {

    const producto = productos.find(p => p.id === id);

    if (!producto) return;

    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("precio").value = producto.precio;

    idEditar = id;

    agregarBtn.textContent = "Actualizar Producto";

    agregarBtn.removeEventListener("click", agregarProducto);
    agregarBtn.addEventListener("click", actualizarProducto);
}

function actualizarProducto() {

    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const precio = document.getElementById("precio").value.trim();

    if (!nombre || !descripcion || !precio) {
        alert("Debe completar todos los campos.");
        return;
    }

    const indice = productos.findIndex(p => p.id === idEditar);

    if (indice !== -1) {

        productos[indice] = {
            id: idEditar,
            nombre,
            descripcion,
            precio: parseFloat(precio)
        };

        renderProductos();
        limpiarFormulario();

        agregarBtn.textContent = "Agregar Producto";

        agregarBtn.removeEventListener("click", actualizarProducto);
        agregarBtn.addEventListener("click", agregarProducto);

        idEditar = null;
    }
}

function eliminarProducto(id) {

    const confirmar = confirm(
        "¿Está seguro de eliminar este producto?"
    );

    if (!confirmar) return;

    const indice = productos.findIndex(
        producto => producto.id === id
    );

    if (indice !== -1) {

        productos.splice(indice, 1);

        renderProductos();
    }
}

function cancelarEdicion() {

    limpiarFormulario();

    idEditar = null;

    agregarBtn.textContent = "Agregar Producto";

    agregarBtn.removeEventListener("click", actualizarProducto);
    agregarBtn.addEventListener("click", agregarProducto);
}

agregarBtn.addEventListener("click", agregarProducto);
cancelarBtn.addEventListener("click", cancelarEdicion);

window.onload = () => {
    renderProductos();
};