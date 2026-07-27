document.addEventListener("DOMContentLoaded", function() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡15% OFF en Mix de Frutos Secos y Granola Artesanal!";

    console.log("Estado de la oferta:", mensaje.textContent);

    const link = document.getElementById("Link");
    link.textContent = "Ver Catálogo Completo de Granola y Frutos Secos";
    link.href = "https://www.ejemplo.com/dietetica/catalogo";
    link.classList.add("boton");
    console.log("Enlace de compra:", link);
});