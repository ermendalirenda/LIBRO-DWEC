//Declaramos variables. De no hacerlo así cada vez que entremos en el buclea las volvería a crear.

var nombre;
var apellidos;
var salario;
var edad;
var decision;

//Solicitamos datos al usuario, suponemos qu elos escribe correctamente.
do {
    nombre = prompt("Introduzca nombre:");
    apellidos = prompt("Introduzca apellidos");
    salario = prompt("Introduzca salario:");
    edad = prompt("Introduzca edad");

    //Calculamos
    if (salario >= 1000 && salario <= 2000) {
        if (edad > 45) salario = salario * 1.03;
        else salario = salario * 1.1;
    } else if (salario < 1000) {
        if (edad < 30) salario = 1100;
        else if (edad >= 30 && edad <= 45) salario = salario * 1.03;
        else salario = salario * 1.15;
    }

    //Lectura final

    document.write(`<p>Persona: ${nombre} ${apellidos}</p>`);
    document.write(`<p>Edad: ${edad}</p>`);
    document.write(`<p> Salario: ${salario}</p>`);
    document.write("<hr height='5' color='brown'>");

    //Damos la posibilidad de volver a introducir datos o salir.
    decision = confirm("¿Desea volver a introducir datos?");

}
while (decision);