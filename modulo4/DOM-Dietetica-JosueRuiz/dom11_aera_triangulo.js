const campoBase = document.getElementById("base");
const campoAltura = document.getElementById("altura");
const btnCalcular = document.getElementById("btn_calcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function () {
    const base = parseFloat(campoBase.value);
    const altura = parseFloat(campoAltura.value);

    if (isNaN(base) || isNaN(altura)) {
        resultado.textContent = "Ingrese medidas válidas";
        return;
    }

    const area = (base * altura) / 2;
    resultado.textContent = "El área requerida para el empaque es: " + area + " cm²";
});