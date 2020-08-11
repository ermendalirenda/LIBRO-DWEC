let n;
let salir = false;

do {
    n = prompt(`Introduce un número entero positivo:`);

    if (n == null) salir = true;
    else n = parseInt(n);
    /*repetiremos el bucle hasta que introduzcamos un número válido o pulsemos Canccelar, 
    con lo que saldremos del programa.*/
} while (!salir && (isNaN(n) || n <= 0));
//Hacemos un seguimiento de la variable n
console.log(`El número introducido es... ${n}`);

for (let i = 1; i <= n; ++i) {
    console.log(`i = ${i}`); //Hacemos un seguimiento de la variable -i-
    for (let j = 1; j <= i; ++j) {
        console.log(`j = ${j}`); //Hacemos un seguimiento de la variable -j-
        document.write("* ");
    }
    document.write("<br>");
}