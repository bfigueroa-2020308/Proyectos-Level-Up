const objeto1 ={
    a : 1,
    b : 2,
    c : 3
}

const objeto2 ={
    a : 'Apple',
    b : 'Microsoft',
    c : 'Google'
}

const objeto3={
    key1 : true,
    key2 : false,
    key3 : undefined
}

function separarKeyValor(objeto){
    const keys = Object.keys(objeto).sort();
    const values = Object.values(objeto).sort();
    return console.log(keys, values);
    
}
separarKeyValor(objeto1);
separarKeyValor(objeto2);
separarKeyValor(objeto3);