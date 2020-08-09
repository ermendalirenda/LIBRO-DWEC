//Declaramos las variables
console.log("Ha entrado en el script");

let rojo = parseInt(Math.random() * 255);
let verde = parseInt(Math.random() * 255);
let azul = parseInt(Math.random() * 255);

//Creamos la página web

document.write(`<div id="fondo" ` + `style="background-color:rgb(${rojo},${verde},${azul})">` + `</div>`);


console.log("Hemos llegado al final del script");