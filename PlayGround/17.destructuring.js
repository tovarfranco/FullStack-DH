//Sirve para obtener los elementos de un array o un objeto literal.

//Destructuring Arrays:
//Se ponen entre [ ] y cada elemento será el elemento del array, separados por coma. 
let array = [1,2,3]
let [color1,color2,color3] = array
console.log(color1) //imprime 1

let [color1,,color3] = array
console.log(color1) //imprime 1


//Objetos:
//Se ponene entre {}, se separan entre comas y puede renombrarse
let objeto = {nombre:"Franco", apellido:"Tovar",age:32}
let {nombre,apellido} = objeto
let {nombre:name, edad:age} = objeto



//Ejercicios:
//Dos variables que tengan a bariloche y a china
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [,bariloche,,china,] = destinosDelMundo