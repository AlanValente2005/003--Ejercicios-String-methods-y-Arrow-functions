/**10. Contar ocurrencias de una letra en una cadena
 * 
 * Escribe una función que cuente cuántas veces aparece una letra específica en una
cadena.
Ejemplo: "javascript", "a" → 2
 */
let cadena = "este es un mensaje para el compañero mani"
let letra = prompt("ingrese la letra a buscar");
function buscar(cadena,letra){
    return cadena.split(letra).length-1;
}
console.log("la letra  "+letra+"  aparece "+ buscar(cadena,letra) + "  veces" );


//Flecha
let cana = "este es un mensaje para el compañero mani"
let le = prompt("ingrese la letra a buscar");
const bus=(cana.le)= cana.split(le).length-1;
console.log("la letra  "+le+"  aparece "+ buscar(cana,le) + "  veces" );