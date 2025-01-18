let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio numero 2!';

function saludarMundo() {
    document.getElementById('resultado1').textContent = "¡Hola, mundo!";
}

function saludarPersona(nombre) {
    return `¡Hola, ${nombre}!`;
}

function ejecutarSaludarPersona() {
    const nombre = document.getElementById('nombre').value;
    document.getElementById('resultado2').textContent = saludarPersona(nombre);
}

function calcularDoble(numero) {
    return numero * 2;
}


function ejecutarCalcularDoble() {
    const numero = Number(document.getElementById('numeroDoble').value);
    document.getElementById('resultado3').textContent = `El doble de ${numero} es ${calcularDoble(numero)}`;
}

function calcularPromedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

function ejecutarCalcularPromedio() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);
    const promedio = calcularPromedio(num1, num2, num3);
    document.getElementById('resultado4').textContent = `El promedio es: ${promedio.toFixed(2)}`;
}

function obtenerMayor(num1, num2) {
    return Math.max(num1, num2);
}

function ejecutarObtenerMayor() {
    const num1 = Number(document.getElementById('mayor1').value);
    const num2 = Number(document.getElementById('mayor2').value);
    const mayor = obtenerMayor(num1, num2);
    document.getElementById('resultado5').textContent = `El número mayor es: ${mayor}`;
}

function calcularCuadrado(numero) {
    return numero * numero;
}

function ejecutarCalcularCuadrado() {
    const numero = Number(document.getElementById('numeroCuadrado').value);
    document.getElementById('resultado6').textContent = `El cuadrado de ${numero} es ${calcularCuadrado(numero)}`;
}