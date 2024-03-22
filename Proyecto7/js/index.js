
let resultado = document.getElementById('resultado');

// funciones arrow
let calcular = () => {
    resultado.value = eval(resultado.value);
}

let funcionsen = () => {
    let radianes = parseFloat(resultado.value) * (Math.PI / 180);
    resultado.value = Math.sin(parseFloat(radianes));
}

let funcioncos = () => {
    let radianes = parseFloat(resultado.value) * (Math.PI / 180);
    resultado.value = Math.cos(parseFloat(radianes));
}

let funciontan = () => {
    let radianes = parseFloat(resultado.value) * (Math.PI / 180);
    resultado.value = Math.tan(parseFloat(radianes));
}

let funcionpow = () => {
    resultado.value = Math.pow(parseFloat(resultado.value), 2);
}

let logaritmo = () => {
    resultado.value = Math.log(parseFloat(resultado.value));
}

let raiz = () => {
    resultado.value = Math.sqrt(parseFloat(resultado.value));
}

let limpiar = () => {
    resultado.value = '';
}

let borrar = () => {
    resultado.value = resultado.value.substring(0, resultado.value.length - 1);
}

let asignar = (valor) => {
    resultado.value += valor;
}

// funciones nombradas
// function asignarX(valor) {
//     // ShortHand
//     resultado.value += valor;
// }

// function limpiarX() {
//     resultado.value = '';
// }

// function calcularX() {
//     resultado.value = eval(resultado.value);
// }


