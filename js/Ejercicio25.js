/* Crea una función que elimine todos los caracteres especiales (como @, #, !) de una
cadena. 
Ejemplo: "Hola@mundo!" → "Holamundo" */

const removerCaracter = cadena => cadena.replace(/[^a-zA-Z0-9\s]/g, '');

console.log(removerCaracter("Hola@mundo!")); 