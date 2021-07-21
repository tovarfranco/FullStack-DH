//Json: javaScript object notation. nativo de javascript
//Sirve para hacer comunicaciones mas fáciles entre cliente servidor. Envío de mensajes, ect..
//Es parecido al objeto literal. Diferencias en comillas, y metodos. 
//Json usa comilla para las claves, y no se puede guardar metodos
//Objeto literal no usa comilla para las claves, pero sí guarda métodos. 

// JSON.parse: convierte texto en formato JSON, en objeto literal. 
let jsonDePrueba = '{"nombre":"Franco","apellido":"tovar"}'
let jsonParseado = JSON.parse(jsonDePrueba)
console.log(jsonParseado) //--->{ nombre: 'Franco', apellido: 'tovar' }

// JSON.stringify: convierte objeto literal en texto en formato JSON.
let objetoLiteral = {nombre: "Franco", apellido:"Tovar"}
let string = JSON.stringify(objetoLiteral)
console.log(string)

//NOTA: Si quiero crear un json digamos:
let test = {"nombre":"Franco","apellido":"tovar"}
//Si veo el tipo de datos, es un objeto literal.
console.log(typeof(test)) //--->{ nombre: 'Franco', apellido: 'tovar' }

//NOTA: creo que no existe el tipo de dato dictionary:  {"nombre":"Franco","apellido":"tovar"}
//Se interpreta como objeto literal