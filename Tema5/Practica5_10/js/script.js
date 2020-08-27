/*function sacaPares(array) {
    return array.filter(x => (x % 2 == 0));
}

function sacaImpares(array) {
    return array.filter(x => (x % 2 != 0));
}

function filtro(array, miFuncion, cadena) {
    if (cadena == "pares") console.log("Pares: " + miFuncion(array));
    else if (cadena == "impares") console.log("Impares: " + miFuncion(array));
}*/

//DEL TÍO. LO PUEDES EJECUTAR CON NODE
function filtro(array, f) {
    if (array instanceof Array) {
        for (let i in array) {
            array[i] = f(array[i]);
        }
    }
}

function factorial(n) {
    if (n < 0) return 0;
    else if (n == 0) return 1;
    else return n * factorial(n - 1);
}

//Sacamos el doble de cada elemento
let array1 = [1, 2, 3, 4, 5];
filtro(array1, e => 2 * e);
console.log(array1);

//Pone en mayúsculas
let array2 = ["hola", "adiós"];
filtro(array2, e => e.toUpperCase());
console.log(array2);

//Calcula factoriales
let array3 = [1, 2, 3, 4, 5];
filtro(array3, e => factorial(e));
console.log(array3);