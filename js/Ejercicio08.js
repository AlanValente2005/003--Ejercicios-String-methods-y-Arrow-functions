/**8. Extraer una parte de una cadena
 * 
 * Escribe una función que devuelva una parte de una cadena usando substring().
Ejemplo: "JavaScript", 4, 10 → "Script"
 */
let acdena="hay que seguir las reglas al pie de la letra";
let inicio=prompt("ingrese el parametro inicial");
let final=prompt("ingrese el parametro final");
function devolver(acdena,inicio,final){
    return acdena.substring(inicio,final);
}
console.log(devolver(acdena,inicio,final));

//Con funcion cadena
let acdena2="hay que seguir las reglas al pie de la letra";
let inicio2=prompt("ingrese el parametro inicial");
let final2=prompt("ingrese el parametro final");
const devol=(acdena2,inicio2,final2) =>acdena.substring(inicio2,final2);

console.log(devol(acdena2,inicio2,final2));
