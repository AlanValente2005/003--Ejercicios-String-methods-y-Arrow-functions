/* 
 * Crea una función que tome una cadena y la devuelva invertida.
Ejemplo: "Hola" → "aloH"
 */

//Funcion flecha
let pala=prompt("ingrese palabra");
const rev=pala.split("").reverse().join("");
console.log(rev);