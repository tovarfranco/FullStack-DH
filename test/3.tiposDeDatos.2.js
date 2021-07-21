//Number: es una funcion nativa. Espera un numero en string y lo parsea a numérico. 
//Si no le llega un numero, tira NaN

let positivo = Number('5');
let negativo = Number('-5');
let decimal = Number('0.6');

let noEsNumero = Number('Hola');
console.log(noEsNumero)

//parseInt: es una funcion nativa. Le paso numero y devuelve la parte entera. 
let numero1 = parseInt('1.02')
let numero2 = parseInt('-1.02')
let numero3 = parseInt('0.8')
