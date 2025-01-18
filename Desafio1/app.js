let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio!';

let ciudad = "null";
let num1 = 0;
let num2 = 0;
let suma = 0;

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Seleccione la funcion que desea usar';

function fnConsole(){
    console.log("El botón fue clickeado");
}

function fnPrompt(){
    ciudad = prompt("Ingrese su ciudad de origen");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function fnAlerta(){
    alert("Prefiero Python");
}

function fnSuma(){
    num1 = Number(prompt("Ingrese un primer número"));
    num2 = Number(prompt("Ingrese un segundo número"));
    suma = Number(num1 + num2);
    alert(`La suma de ambos numero es ${suma}`);
}

