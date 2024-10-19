/** Escribe una función que verifique si una cadena contiene solo números.
Ejemplo: "12345" → true*/

const soloNumeros = cadena => /^[0-9]+$/.test(cadena);

let texto = "12345";
console.log(soloNumeros(texto)); // true