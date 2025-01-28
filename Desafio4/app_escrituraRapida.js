let listaGenerica = [];

let listaLenguajes = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

function masLenguajes(array){
    let pushLista = array.push('Java', 'Ruby', 'GoLang');
    return array
}
console.log(masLenguajes(listaLenguajes))

function reversedLenguaje(array){ return array.reverse();}

console.log(reversedLenguaje(listaLenguajes));

function numAleatorio(){return Math.random() * (10)}

let listaNumero =[];
listaLargo = numAleatorio() + 1;
console.log(`La lista tiene el largo ${numAleatorio()}`);

 
function genLista(array){
    let j= 0;
    while (j < listaLargo){
        pushLista= array.push(numAleatorio());
        j++;
    }
    return array
}
genLista(listaNumero)

function obtenerPromedio(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
}

obtenerPromedio(listaNumero)

function obtenerMinMax(array){
    console.log(`El Minimo de la lista es ${Math.min(...array)} y el maximo es ${Math.max(...array)}`)
}

obtenerMinMax(listaNumero)

function sumaLista(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum
}

console.log(`La suma de todos los elementos en la lista es: ${sumaLista(listaNumero)}`);

function encontrarPosicion(lista, elemento) {
    const posicion = lista.indexOf(elemento);
    return posicion !== -1 ? posicion : -1;
  }

encontrarPosicion(listaNumero, numAleatorio);

let listaNumero_2 =[];
genLista(listaNumero_2);

function sumaListas(array1,array2){
    let sumaLista2Lista=[]
    for (let i = 0; i < array.length; i++) {
        pushLista = sumaLista2Lista.push(array1[i]+array2[i]);
      }
    return sumaLista2Lista
}

console.log(sumaListas(listaNumero,listaNumero_2));

function cuadradoLista(array1){
    let listaCuadrada =[];
    for (let i = 0; i < array.length; i++) {
        listaCuadrada.push(Math.pow(array1[i],2));
      }
    return listaCuadrada
}

console.log(cuadradoLista(listaNumero));
