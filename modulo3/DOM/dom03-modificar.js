document.addEventListener("DOMContentLoaded", 
    function() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Mensaje texto modificado";

    console.log("Mensaje:", mensaje);

    const link = document.createElement("link");
    link.textContent = "www.google.com";
    link.href = "https://www.ejemplo.com";
    link.classList.add("boton");
    console.log("Link:", link);
    
});
