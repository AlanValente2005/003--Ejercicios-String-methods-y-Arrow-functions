/**12. Comprobar si una palabra es un palíndromo
 * 
 * Escribe una función que determine si una palabra es un palíndromo (se lee igual al
revés).
Ejemplo: "ana" → true
 */

let pa=prompt("ingrese palabra");
let parinver = pa.split('').reverse().join('');
const pol=(pa)=pa===parinver;
console.log(pol);