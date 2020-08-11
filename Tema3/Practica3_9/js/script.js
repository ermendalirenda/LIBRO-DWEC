let factorial = 1;
let n = parseInt(prompt("Introduce un número:"));

for (let i = 1; i <= n; ++i)
    factorial = factorial * i;

document.write(`El factorial de ${n} es ${factorial}`);