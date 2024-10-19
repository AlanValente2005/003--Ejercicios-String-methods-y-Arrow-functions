/**Crea una función que reemplace todas las ocurrencias de una palabra en una
cadena usando replaceAll().
Ejemplo: "hola hola", "hola", "adiós" → "adiós adiós" */

const reemplazarPalabra = (cadena, palabraAntigua, palabraNueva) => cadena.replaceAll(palabraAntigua, palabraNueva);

// remplazando todas las ocurrencias de "hola hola" por "adiós adiós"
let texto = "hola hola";
let palabraAntigua = "hola";
let palabraNueva = "adiós";

console.log(reemplazarPalabra(texto, palabraAntigua, palabraNueva)); // "adiós adiós"