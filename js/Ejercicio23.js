/**Crea una función que trunque una cadena a un número específico de caracteres,
agregando ... al final si es más larga.
Ejemplo: "JavaScript es genial", 10 → "JavaScri..." */

const truncarCadena = (cadena, numCaracteres) => 
    cadena.length > numCaracteres 
      ? cadena.slice(0, numCaracteres) + '...' 
      : cadena;
  
  let texto = "JavaScript es genial";
  let numCaracteres = 10;
  console.log(truncarCadena(texto, numCaracteres));