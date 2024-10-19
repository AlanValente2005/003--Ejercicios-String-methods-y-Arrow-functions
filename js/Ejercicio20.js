/**Escribe una función que verifique si una cadena termina con una palabra específica
usando endsWith().
Ejemplo: "JavaScript es genial", "genial" → true */

const terminaCon = (cadena, palabra) => cadena.endsWith(palabra);

let texto = "JavaScript es genial";
let palabra = "genial";
console.log(terminaCon(texto, palabra));