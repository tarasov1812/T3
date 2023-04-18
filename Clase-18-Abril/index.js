'strict mode'
//dos div arriba
d11 = document.getElementById('d1-1');
d12 = document.getElementById('d1-2');

//div en el centro
d2 = document.getElementById('d2');

//dos div abajo
d31 = document.getElementById('d3-1');
d32 = document.getElementById('d3-2');

//ponemos valores iniciales
d11.innerHTML =1;
d12.innerHTML =2;
d2.innerHTML =3;
d31.innerHTML =4;
d32.innerHTML =5;

let divEligido;
//pedimos al usuario a cual cuadrado el quiere poner la palabra
do {
divEligido = parseInt(prompt('Dime en cual cuadrado queires poner la palabra (entre 1 y 5)'));
    // Si usuario puse un numero incorrecto ponemos una alerta
    if (divEligido <= 0 || divEligido > 5){
        alert('ENTRE 1 Y 5 POR FAVOR!!!!!')
}
} while (divEligido <= 0 || divEligido > 5); // pedimos hasta que pone un numero entre 1 y 5
// pedimos una palabra para colocar en el cuadrado
let palabra = prompt('Dime la palabra');

//depende de la cifra que dijo el usuario - con switch elejimos el div
let div;
switch(divEligido){
    case 1: 
        div = d11;
        break;
    case 2: 
        div = d12;
        break;
    case 3: 
        div = d2;
        break;
    case 4: 
        div = d31;
        break;
    case 5: 
        div = d32;
        break;
}
//ponemos palabra en el div elijido
div.innerHTML = palabra;
