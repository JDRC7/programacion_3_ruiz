const caja = document.getElementById('caja');

caja.addEventListener('mouseover', ()=>{
    caja.style.backgroundColor = 'yellow';
    caja.textContent = '¡Degustación: Mix de Semillas!';
});

caja.addEventListener('mouseout', ()=>{
    caja.style.backgroundColor = 'lightcyan';
    caja.textContent = 'Stand de Degustación';
});

caja.addEventListener('click', ()=>{
    caja.style.backgroundColor = 'blue';
    caja.style.color = 'white';
    caja.textContent = '¡Muestra Solicitada!';
});

const area = document.getElementById('areaTouch');

area.addEventListener('touchstart', ()=>{
    area.style.backgroundColor = 'green';
    area.textContent = '¡Cupón Sin TACC Confirmado!';
});