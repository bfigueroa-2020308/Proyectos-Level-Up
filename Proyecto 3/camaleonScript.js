const colores = {
    0 : 'pink',
    1 : 'red',
    2 : 'blue',
    3 : 'brown',
    4 : 'crimson',
    5 : 'green',
    6 : 'fuscia',
    7 : 'purple',
    8 : 'yellow',
    9 : 'grey'        
}

function obtenerColorRandom(){
   cantidad = Object.keys(colores).length;
   random = Math.random();
   numeroRandom = random * cantidad 
   return Math.round(numeroRandom);
}

document.querySelector('#cambiaColor').addEventListener('click', ()=>{
    color = colores[obtenerColorRandom()];
    document.body.style.background = color
    document.querySelector('label').innerHTML = 'El color es: ' + color
})