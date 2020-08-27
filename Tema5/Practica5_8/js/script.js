/*EL MÍO FUNCIONA BIEN PERO, COMO SIEMPRE, EL SUYO MEJOR :(*/

function anagrama(arrayStrings) {
    /*arrayAux  tendrá los valores del array, pero en minúsculas
    y sintildes. LO QUE VAMOS A HACER ES PASAR LAS PALABRAS DE
    ARRAYSTRINGS LIMPIAS A ARRAYAUX*/

    const arrayAux = [];

    //solo actuamos si tenemos un array
    if (arrayStrings instanceof Array) {
        //recorrido para quitar tildes y pasar a minúsculas
        for (let texto of arrayStrings) {
            //convertimos a minúsculas
            texto = texto.toLocaleLowerCase("es");

            let textoR = texto;
            //quitamos tildes de todos los textos
            do {
                texto = textoR;
                textoR = textoR.replace('á', 'a');
                textoR = textoR.replace('é', 'e');
                textoR = textoR.replace('í', 'i');
                textoR = textoR.replace('ó', 'o');
                textoR = textoR.replace('ú', 'u');
                textoR = textoR.replace('ü', 'u');
                textoR = textoR.replace('à', 'a');
                textoR = textoR.replace('è', 'e');
                textoR = textoR.replace('ì', 'i');
                textoR = textoR.replace('ò', 'o');
                textoR = textoR.replace('ù', 'u');
            } while (texto != textoR);
            texto = textoR; //Tenemos el texto ya limpio

            //Colocamos el texto normalizado en el segundo array
            arrayAux.push(texto);
        } //Hacemos esta limpieza con todas las cadenas dentro del array

        //ordenamos cada texto del array. DESPUÉS SOLO TENEMOS QUE COMPARARLOS PARA VER SI LOS TEXTOS SON IGUALES, Y TE AHORRAS LO
        //DE IR CARÁCTER A CARÁCTER. K CRACK!
        for (let i in arrayAux) {
            //convertimos el texto en array de caracteres
            //LO HAREMOS PARA PODER USAR EL MÉTODO SORT. ESTE NO FUNCIONA EN 
            //CADENAS.
            let a = arrayAux[i].split(''); //pASAMOS A ARRAY
            console.log("el array DE CARACTERES -a- es..." + a);
            a.sort((a, b) => a.localeCompare(b, "es"));
            arrayAux[i] = a.join(''); //LO CONVERTIMOS OTRA VEZ A CADENA
        }
        //ahora comprobamos que todos los elementos
        //del array son inguales, si no, devolemos false
        let primerTexto = arrayAux[0];
        //navegamos desde el segundo elemento
        let anagrama = true;
        for (let i = 1; anagrama && i < arrayAux.length; i++) {
            anagrama = (primerTexto == arrayAux[i]); //ME ENCANTA ESTO WOW!
        }
        return anagrama;
    } else {
        return false;
    }
}

console.log(anagrama(["Hola", "LOAH", "Hálo"])); //K CABRON!!


/*function iniciaCadenas(cadenas) {
    let s = prompt("Introduce cadenas, mínimo 2. Deja vacío para terminar.");

    while (s != null && s != "") {
        cadenas.push(s);
        console.log("El array en iniciaCadenas()..." + cadenas);
        s = prompt("Introduce cadenas, mínimo 2. Deja vacío para terminar.");
    }

    if ((cadenas.length < 2) || s == null) return null;
    else return cadenas;
}

/*

function estaEn(car, texto) { //esta función me dice si un carácter se encuentra en un texto

    if (texto.indexOf(car) == -1) { //es decir, si no lo encontramos
        return false;
    } else return true;
}

function anagrama(cadenas) {

    if (cadenas instanceof Array) {
        let ana = true;

        //Cogemos el primer carácter de la primera cadena y lo buscamos en la segunda cadena
        //si no está, entonces no será un anagrama.

        console.log("La cadena entrando en anagrama()... " + cadenas);

        cad = cadenas[0]; //Esta será la cadena que tomaremos como base para comparar
        console.log("La cadena base es... " + cad);

        for (let i = 1; i < cadenas.length && ana; ++i) { //recorremos todas las cadenas desde la segunda (pos i==1) hasta la última.
            if (cad.length == cadenas[i].length) { //Comprobamos que tengan el mismo tamaño
                for (let j = 0; j < cad.length && ana; ++j) { //recorremos los caracteres de la cadena base (la primera)
                    if (!estaEn(cad.charAt(j), cadenas[i])) { //Devuelve true si el caracter del primer argumento se encuentra en la cadena del segundo.
                        console.log("El carácter " + cad.charAt(j) + " no se encuentra en " + cadenas[i]);
                        ana = false;
                    } else
                        console.log("El carácter " + cad.charAt(j) + " SÍ se encuentra en " + cadenas[i]);
                }

            } else ana = false; //Si ni siquiera tienen el mismo tamaño no vale la pena seguir.
        }
        return ana;
    } else {
        console.error("Función anagrama(). Se esperaba un array");
        return null;
    }
}*/