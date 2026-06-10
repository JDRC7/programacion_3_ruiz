const caja= document.getElementById('caja');

caja.addEventListener('mouseover', ()=>{
    caja.style.backgroundColor='yellow';
});

caja.addEventListener('mouseout', ()=>{
    caja.style.backgroundColor='lightcyan';
});

caja.addEventListener('click', ()=>{
    caja.style.backgroundColor='blue';
});

const area = document.getElementById('areaTouch');

area.addEventListener('touchstart', ()=>{
    area.style.backgroundColor='green';
});
