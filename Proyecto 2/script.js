var numero = 1;

function esMayorMenor(){
    if(numero > 0){
        document.querySelector('label').style.color = 'green';
    }else if(numero < 0){
        document.querySelector('label').style.color = 'red';
    } else if(numero === 0){
        document.querySelector('label').style.color = 'black';
    }
}

document.querySelector('#sumar').addEventListener('click', ()=>{
    document.querySelector('#numerito').innerHTML = numero++;
    esMayorMenor();
})

document.querySelector('#resetear').addEventListener('click', ()=>{
    document.querySelector('#numerito').innerHTML = 0;
    numero = 0;
    esMayorMenor();
})

document.querySelector('#restar').addEventListener('click', ()=>{
    document.querySelector('#numerito').innerHTML = numero--;
    esMayorMenor();
})
