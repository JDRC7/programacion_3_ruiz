document.addEventListener("DOMContentLoaded", () => {
    const zona = document.getElementById("zonaInteractiva");

    zona.addEventListener("dblclick", () => {
        zona.style.backgroundColor = "#c8e6c9";
        zona.textContent = "¡Promoción 2x1 en Semillas de Chía y Lino!";
    });

    zona.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        zona.style.backgroundColor = "#ffcc80";
        zona.textContent = "Reserva de Productos Fit Activada";
    });
});