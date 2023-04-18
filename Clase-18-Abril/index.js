'strict mode'

let divEligido;
//pedimos al usuario a cual cuadrado el quiere poner la palabra
do {
divEligido = parseInt(prompt('Dime en cual cuadrado queires poner la piramida (entre 1 y 5)'));
    // Si usuario puse un numero incorrecto ponemos una alerta
    if (divEligido <= 0 || divEligido > 5){
        alert('ENTRE 1 Y 5 POR FAVOR!!!!!');
    }
} while (divEligido <= 0 || divEligido > 5); // pedimos hasta que pone un numero entre 1 y 5

let div;
switch(divEligido){
    case 1: 
        div = document.getElementById('p1');
        break;
    case 2: 
        div = document.getElementById('p2');
        break;
    case 3: 
        div = document.getElementById('p3')
        break;
    case 4: 
        div = document.getElementById('p4');
        break;
    case 5: 
        div = document.getElementById('p5');
        break;
}

// pedimos ejejir el color al usuario

let color = prompt('a - blue \n b - red \n c - green');

switch(color){
    case 'a': 
        div.style.color = 'blue';
        break;
    case 'b': 
        div.style.color = 'red';
        break;
    case 'c': 
        div.style.color = 'green';
        break;
}

// Ponemos la piramida en el article
let rows = 3;
for (let i = 0; i < rows; i++) {
  let spaces = '&nbsp;'.repeat(rows - i - 1);
  let stars = '*'.repeat(2 * i + 1);
  div.innerHTML += spaces + stars + '<br>';
}
