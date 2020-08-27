//Funcion que nos permta dibujar una tabla en una página web
//Como parámetros indicaremos el número de filas y de columnas con dos números. 
//Por defecto cogerá 10f y 4c.
//La tabla se crea con un borde negro de 1 píxel entre cada celda, pero un tercer
//parámetro permite indicar el color (por defecto será negro). 
//El borde exterior
//medirá 3 píxeles y siempre será del mismo color que el borde de las celdas.
//La tabla ocupará toda la anchura de la página.

/*Mi versión funciona, la del tío se basa en estilos interiores*/

function creaTabla(filas = 10, columnas = 4, color = "black") {
    document.write(`<table style='border-collapse:collapse;` +
        `border:3px solid ${color};width:100%;>`);

    for (let i = 1; i <= filas; i++) {
        document.write("<tr>");
        for (let j = 1; j <= columnas; j++) {
            document.write(`<td style='border:1px solid ` +
                `${color}'>&nbsp;</td>`);
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

/*function creaTabla(filas = 10, columnas = 4, color = "black") {
    document.write(`<table border="3px" cellspacing="1px" width="100%" bordercolor="${color}">`);

    for (let i = 0; i < filas; ++i) {
        document.write("<tr align='center'>");
        for (let j = 0; j < columnas; ++j) {
            document.write(`<td>${i+1},${j+1}</td>`);
        }
        document.write("</tr>");
    }
    document.write("</table>");


}*/