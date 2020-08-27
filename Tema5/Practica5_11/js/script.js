function creaMapa(filas, columnas) {
    //Creamos los arrays
    console.log(`filas: ${filas}, columnas: ${columnas}`);
    let array = new Array(filas);

    for (let i in array) {
        array[i] = new Array(columnas);
        for (let j = 0; j < array[i].length;
            ++j)
            array[i][j] = "0";
    }
    console.log(array);
    return array;
}

function iniciaMapa(array) {
    //Iniciamos el mapa a 0 en todas sus casillas
    console.log(array);
    if (array instanceof Array) {
        console.log("entramos en instanceOf");
        for (let i = 0; i < array.length; ++i) {
            console.log("Entramos en let i");
            for (let j = 0; j < array[i].length; ++i) {
                console.log("Entramos en let j");
                array[i][j] = "0"; //si no vas a operar con ellos usa cadenas o caracteres
            }
            console.log("ññ" + array[i]);
        }
        console.log("En iniciaMapa() ... " + array);
        return array;
    } else {
        console.error("No se ha recibido el array");
        return null;
    }
}

function recorreMapa(array) {
    for (let i = 0; i < array.length; ++i) {
        console.log(`Array[${i}]= ${array[i]}`);
    }
}