//Spread:
//Es un operador que permite expandir cada uno de los datos de un iterable dentro de otro elemento.
//Copiar y mover los elementos de un iterable a otro elemento

//Uso y Sintaxis:
// ...variable: se usan 3 puntos, y el iterable


//En arrays
let primerArray = [1,2,3]
let segundoArray = [4,5,6]

let arrayTotal = [...primerArray, ...segundoArray]

console.log(arrayTotal)  //[1,2,3,4,5,6]

let palabras = ['te','quiero','mucho']
let totalPalabras = ['Hola!', ...palabras]
console.log(totalPalabras)  // [ 'Hola!', 'te', 'quiero', 'mucho' ]

//En Objetos:

let auto = {marca:"Ferrari",modelo:200}

let corredor1 = {nombre:"Franco", apellido:"Tovar", ...auto}
console.log(corredor1) //{ nombre: 'Franco', apellido: 'Tovar', marca: 'Ferrari', modelo: 200 }

//En funciones:
//La funcion puede recibir como argumento cada valor del array u objeto:
let notas = [7,7,8,7,7]
//Math.min(nota1,nota2,nota3,nota5,nota6)
Math.min(...notas)


