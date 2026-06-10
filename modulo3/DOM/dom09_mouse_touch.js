const campoTarea = document.getElementById("campo_tarea");
const btnAgregar = document.getElementById("boton_agrega");
const listaTareas = document.getElementById("lista_tareas");

btnAgregar.addEventListener("click", function() {
    const tarea = campoTarea.value;
    if (tarea.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = tarea;
        listaTareas.appendChild(li);
        campoTarea.value = "";
    }
});