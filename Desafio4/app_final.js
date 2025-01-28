//1.- Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2.-Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript',
//'C', 'C++', 'Kotlin' y 'Python'.
let listaLenguajes = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3.- Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
function masLenguajes(array){
    array.push('Java', 'Ruby', 'GoLang');
    return array;
}
//4.- Crea una función que muestre en la consola 
//todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguajes(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//5.- Crea una función que muestre en la consola todos los elementos de la 
//lista "lenguagesDeProgramacion en orden inverso.
function reversedLenguaje(array){ 
    return array.reverse();
}

// Generar un numero aleatorio entre 1 y 10
function numAleatorio(){
    return Math.floor(Math.random() * 10) + 1;
}

//Crear un arreglo y llenarla con numeros aleatorios entre 1 y 10
let listaNumero = [];
let listaLargo = numAleatorio();
console.log(`La lista tiene el largo ${listaLargo}`);
 
function genLista(array){
    let j = 0;
    while (j < listaLargo){
        array.push(numAleatorio());
        j++;
    }
    return array;
}
//6.- Crea una función que calcule el promedio de los elementos 
// en una lista de números.
function obtenerPromedio(array) {
    if (array.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

//7.- Crea una función que muestre en la consola el número más grande
//y el número más pequeño en una lista.

function obtenerMinMax(array){
    console.log(`El Minimo de la lista es ${Math.min(...array)} y el maximo es ${Math.max(...array)}`);
}

//8.-Crea una función que devuelva la suma de todos los elementos en
// una lista.

function sumaLista(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

//9.- Crea una función que devuelva la posición en la lista donde
//se encuentra un elemento pasado como parámetro, o -1 si no existe 
//en la lista.

function encontrarPosicion(lista, elemento) {
    const posicion = lista.indexOf(elemento);
    return posicion !== -1 ? posicion : -1;
}

//10.- Crea una función que reciba dos listas de números del mismo 
// tamaño y devuelva una nueva lista con la suma de los elementos 
// uno a uno.

function sumaListas(array1, array2){
    let sumaLista2Lista = [];
    for (let i = 0; i < array1.length; i++) {
        sumaLista2Lista.push(array1[i] + array2[i]);
    }
    return sumaLista2Lista;
}

//11.- Crea una función que reciba una lista de números y 
//devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(array1){
    let listaCuadrada = [];
    for (let i = 0; i < array1.length; i++) {
        listaCuadrada.push(Math.pow(array1[i], 2));
    }
    return listaCuadrada;
}

// Pruebas
console.log("Lista de lenguajes original:");
mostrarLenguajes(listaLenguajes);

console.log("\nAgregando más lenguajes:");
masLenguajes(listaLenguajes);
mostrarLenguajes(listaLenguajes);

console.log("\nLista en reversa:");
reversedLenguaje(listaLenguajes);
mostrarLenguajes(listaLenguajes);

genLista(listaNumero);
let listaNumero_2 = [];
genLista(listaNumero_2);

console.log("\nOperaciones con números:");
console.log("Promedio:", obtenerPromedio(listaNumero));
obtenerMinMax(listaNumero);
console.log("Suma total:", sumaLista(listaNumero));
console.log("Suma de listas:", sumaListas(listaNumero, listaNumero_2));
console.log("Cuadrados:", cuadradoLista(listaNumero));