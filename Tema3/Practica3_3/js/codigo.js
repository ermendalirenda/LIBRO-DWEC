document.write("<h1>Hola caracola</h1>");

let numero = prompt("Introduce un número válido");
if (isNaN(numero)) alert(`El número ${numero} no es válido`);
else
    alert(`El número ${numero} es perfectamente válido.`);