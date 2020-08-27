//CREAR MAPA CON REPETICIONES DE ARRAYS

//Crea una función que reciba un array de palabras
//La función devolverá un mapa que contenga como clave cada 
//palabra, y el valor es el número de veces que esa palabra aprece en el array

//Haremos una página web que lea palabras hasta que el usuario cancele o 
//deje vacío el cuadro y mostraremos las repeticiones de las palabras.






/* MI PROGRAMA FUNCIONA KTKGAS ONTHEBRAGAS. mira el del profe en repeticiones.js y accion.js
function array_a_Mapa(array) {
    //Esta función convierte un array a un mapa para de este modo eliminar los repes. 
    //Devuelve el mapa así creado.
    if (array instanceof Array == false) {

        return null;
    } else {
        console.log(`El array que hemos recibido en array_a_Mapa() es... ${array}`);
        const mapa = new Map();
        let cont = 0;
        let long = array.length;

        for (let i = 0; i < long; ++i) {
            //console.log(`Probamos con ...${array[i]}`);
            if (!mapa.has(array[i])) { //Si aún no nos hemos puesto a buscar los repes de este elemento, lo añadimos
                //al mapa e iniciamos la búsqueda anotando los que nos encontremos.

                mapa.set(array[i], ++cont); //Añadimos una entrada en el mapa y vemos los repetidos que hay.

                for (let j = i + 1; j < long; ++j) { //Empezamos a buscar a partir de la siguiente posición.

                    if (array[i] == array[j]) {
                        console.log(`cont en ${array[i]} vale: ${cont}`)
                        mapa.set(array[i], ++cont);
                    }
                }

            }
            cont = 0;

        }
        return mapa;
    }
}*/