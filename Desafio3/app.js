document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const tabName = this.getAttribute('data-tab');
            openTab(e, tabName);
        });
    });

    document.querySelector('#calcularIMC').addEventListener('click', calcularIMC);
    document.querySelector('#calcularFactorial').addEventListener('click', calcularFactorial);
    document.querySelector('#convertirDolares').addEventListener('click', convertirDolares);
    document.querySelector('#calcularRectangular').addEventListener('click', calcularRectangular);
    document.querySelector('#calcularCircular').addEventListener('click', calcularCircular);
    document.querySelector('#calcularTabla').addEventListener('click', mostrarTabla);
});

function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let content of tabContents) {
        content.classList.remove("active");
    }

    const tabButtons = document.getElementsByClassName("tab-button");
    for (let button of tabButtons) {
        button.classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    if (peso && altura) {
        const imc = peso / (altura * altura);
        let categoria = "";
        if (imc < 18.5) categoria = "Bajo peso";
        else if (imc < 25) categoria = "Peso normal";
        else if (imc < 30) categoria = "Sobrepeso";
        else categoria = "Obesidad";
        
        document.getElementById("resultadoIMC").innerHTML = 
            `Tu IMC es: ${imc.toFixed(2)}<br>Categoría: ${categoria}`;
    }
}

function calcularFactorial() {
    const numero = parseInt(document.getElementById("numeroFactorial").value);
    if (numero >= 0) {
        let factorial = 1;
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }
        document.getElementById("resultadoFactorial").textContent = 
            `El factorial de ${numero} es: ${factorial}`;
    }
}

function convertirDolares() {
    const dolares = parseFloat(document.getElementById("dolares").value);
    const tasaCambio = 1000; //dolar a luca
    if (dolares) {
        const pesos = dolares * tasaCambio;
        document.getElementById("resultadoConversor").textContent = 
            `$${dolares} USD = $${pesos.toFixed(2)} CLP`;
    }
}

function calcularRectangular() {
    const altura = parseFloat(document.getElementById("altura_rect").value);
    const anchura = parseFloat(document.getElementById("anchura").value);
    
    if (altura && anchura) {
        const area = altura * anchura;
        const perimetro = 2 * (altura + anchura);
        document.getElementById("resultadoRectangular").innerHTML = 
            `Área: ${area.toFixed(2)} m²<br>Perímetro: ${perimetro.toFixed(2)} m`;
    }
}

function calcularCircular() {
    const radio = parseFloat(document.getElementById("radio").value);
    const PI = 3.14;
    
    if (radio) {
        const area = PI * radio * radio;
        const perimetro = 2 * PI * radio;
        document.getElementById("resultadoCircular").innerHTML = 
            `Área: ${area.toFixed(2)} m²<br>Perímetro: ${perimetro.toFixed(2)} m`;
    }
}

function mostrarTabla() {
    const numero = parseInt(document.getElementById("numeroTabla").value);
    if (numero) {
        let tabla = "<table>";
        for (let i = 1; i <= 10; i++) {
            tabla += `<tr><td>${numero} × ${i} = ${numero * i}</td></tr>`;
        }
        tabla += "</table>";
        document.getElementById("resultadoTabla").innerHTML = tabla;
    }
}