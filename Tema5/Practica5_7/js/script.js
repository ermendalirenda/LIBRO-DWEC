function limpiaFrase(frase) {
    const caracteres = " ¿?¡!,.;";
    let cadena = "";

    console.log("En la función la frase entra como... " + frase);

    for (let i = 0; i < frase.length; ++i) {
        console.log("Caracter: " + frase.charAt(i));
        if (caracteres.indexOf(frase.charAt(i)) == -1) { //Si no es uno de los caracteres especiales, lo añadimos a cadena.
            cadena = cadena + frase.charAt(i);
        }
    }
    return cadena;
}

function pasa_a_minusculas(frase) {
    return (frase.toLowerCase());
}

function quita_tildes(frase) {
    let fraseR = frase;

    let temp; //El tío usa otra vez la cadena FRASE, pero m cuesta menos entenderlo creando temp.

    //Lo siguienet se hará mientras las dos sentencias sean diferentes.
    do {
        temp = fraseR; //Guardamos el estado antes de los cambios (hacemos una copia). si después de los cambios todo sigue igual 
        //es que no son necesarios más cambios. Podríamos haber usado otra nueva cadena en lugar de Frase.
        //Esto se hace porque replace() solo reemplaza un carácter en cada iteración.

        fraseR = fraseR.replace('á', 'a'); //hay que asignarla para que se materialicen los cambios
        fraseR = fraseR.replace('à', 'a');
        fraseR = fraseR.replace('é', 'e');
        fraseR = fraseR.replace('è', 'e');
        fraseR = fraseR.replace('ó', 'o');
        fraseR = fraseR.replace('ò', 'o');
        fraseR = fraseR.replace('í', 'i');
        fraseR = fraseR.replace('ì', 'i');
        fraseR = fraseR.replace('ó', 'o');
        fraseR = fraseR.replace('ò', 'o');
        fraseR = fraseR.replace('ù', 'u');
        fraseR = fraseR.replace('ú', 'u');
        fraseR = fraseR.replace('ü', 'u');
        //Si no se ha producido ningún cambio es que ya no hay que buscar más
    } while (temp != fraseR);

    return temp;
}

function esPalindromo(frase) {

    let long = frase.length;
    let pal = true;

    for (let i = 0, j = long - 1;
        (i < j) && pal; ++i, --j) {

        //Se cumplirá mientras los extremos sean iguales y no lleguemos a la mitad de la sentencia
        if (frase.charAt(i) != frase.charAt(j)) {

            pal = false;
        }
    }

    return pal;
}