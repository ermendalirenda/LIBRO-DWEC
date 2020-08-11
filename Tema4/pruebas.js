let texto1 = "ana";
let texto2 = "    Ana    ";
let texto3 = "Nabucodonosor";
let texto4 = "Había una vez un barquito chiquitito.";

console.log(texto3.charAt(5));
console.log(texto3.charCodeAt(5));
console.log(texto3.toUpperCase());
console.log(texto3.lastIndexOf("o"));
console.log(texto3.endsWith("osor"));
console.log(texto3.replace("uco", "xxx"));
console.log(texto3);
console.log(texto2.trim());
console.log(texto3.slice(4, 12));
console.log(texto3.substr(2, 2));
console.log(texto4.split(" ", 4));
console.log(`El código de 111 es... ${String.fromCharCode(111)}`);