//Declaramos variables
let numero; //Número aleatorio
let elige; //Número que elige el usuario
let numeroCorrecto = false; //el usuario ha introducido un número correcto?
let salir = false;
let cont = 0;

//Elegimos un número al azar.
numero = parseInt(Math.random() * 100) + 1;
console.log(`El número es... ${numero}`);
//console.log(`El valor de null es... ${parseInt(null)}`);

//El bucle se repetirá hasta que el usuario adivine el número
do {

    //El usuario eligirá un número hasta que este sea válido.               
    do {
        elige = prompt("¿En qué número estoy pensando?"); //Tuve que quitar el parseInt() porque
        //no reconocía el null producido por la pulsación de Cancelar.
        if (elige == null) { //Hemos pulsado Cancelar, así que nos salimos
            salir = true;
            console.log("has pulsado cancelar. el valor es nulo");
        } else if (isNaN(elige) || elige < 0 || elige > 100) alert("Escribe algo mejor, anda guapo.");
        else numeroCorrecto = true;
    } while (!salir && !numeroCorrecto);

    if (!salir) {
        if (numero > elige) {
            alert(`El número en que estoy pensando es mayor que ${elige}`);
            ++cont;
        } else if (numero < elige) {
            alert(`El número en que estoy pensando es menor que ${elige}`);
            ++cont;
        }
    }
}
while (!salir && numero != elige);
//Mensajes dependiendo de lo que eligió el usuario
if (salir)
    document.write("<h1>Se canceló la partida.</h1>");
else
    document.write("<h1>Gracias por jugar</h1>");