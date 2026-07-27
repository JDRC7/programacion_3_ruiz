document.addEventListener("DOMContentLoaded", function(){
    const titulo = document.getElementById("titulo");
    console.log("Sección activa:", titulo.textContent);

    const promociones = document.getElementsByClassName("nota");
    console.log("Promociones vigentes:", promociones);

    const listado = document.getElementsByTagName("li");
    console.log("Artículos registrados:", listado);

    const primerDestacado = document.querySelector(".item");
    console.log("Producto destacado del día:", primerDestacado.textContent);

    const todosLosProductos = document.querySelectorAll(".item");
    console.log("Listado completo de productos:"); 

    Array.from(todosLosProductos).forEach(producto => {
        console.log("Artículo disponible:", producto.textContent);
    });
});