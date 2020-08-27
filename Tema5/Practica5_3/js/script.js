//Crea una función que permita saber si un número es primo o no.
//Un número es primo si no se puede dividir de forma entera por otro número, sin
//contar el uno ni el propio número, dando un resto de cero.
//Aprovecha la función creada para crear una página web que escriba los números
//primos del 1 al 1000.

function esPrimo(n) {
    if (n < 1) return false;
    if (n == 1) return true;
    //Terminamos cuando la raíz cuadrada del contador supere el número. No tiene
    //sentido seguir a partir de este punto.
    for (let i = 2; i * i <= n; i++) {
        //Si el número se puede dividir por el contador no tenemos un primo.
        if (n % i == 0) return false;
    }
    return true;
}


/*FUNCIONA BIEN. LA SOLUCIÓN DEL TÍO MOLA.
function esPrimo(n) {
    let posiblePrimo = true;

    for (let i = 2; i <= n - 1; ++i) {
        if (!(n % i)) //Si se puede dividir por cualquier número se acaba
        //la función. No puede ser primo.
            posiblePrimo = false;
    }
    return posiblePrimo;
}
*/