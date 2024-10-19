/** Crea una función que verifique si una cadena comienza con una palabra específica
usando startsWith().
Ejemplo: "JavaScript es genial", "JavaScript" → true*/

const empiezaCon = (cadena, palabra) => cadena.startsWith(palabra);

let texto = "JavaScript es muy dificil";  
let palabra = "JavaScript";
console.log(empiezaCon(texto, palabra));