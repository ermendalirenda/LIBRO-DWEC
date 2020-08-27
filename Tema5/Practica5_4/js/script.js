//La aplicación pide palabras hasta Aceptar o Cancelar
//Se eliminarán palabras repetidas y además se ordenarán en español, pero
//en orden inverso (de la Z a la A).

function cancelar(texto) {
    //Devuelve true si se ha cancelado una ventana
    return texto == null;
}

function campoVacio(texto) {
    //Devuelve true si el texto es igual al texto vacío
    return texto == "";
}

function repetido(texto, array) {
    //Devuelve true si el texto se encuentra en el array.
    if (array instanceof Array) {
        if (array.includes(texto)) {
            console.error("repe");
            return true;
        } else
            return false;

    } else console.error("Se esperaba un array");
}

function introCadena(texto, array) {
    //Introducimos una caden al final del array
    if (array instanceof Array) {
        array.push(texto);
    } else console.error("Se esperaba un array");
}

function ordena(array) {
    //Ordena en orden inverso las palabras del array

    if (array instanceof Array) {
        array.sort((a, b) => a - b)
            //array.sort();

    } else console.error("Se esperaba una array");
}