//La variable VAR, es una variable global. Puede ser vista desde cualquier parte del codigo.
//Se le puede sobreescribir su valor.
//Sin embargo, su uso esta deprecado.
var miPrimeraVariable = 'Esta es mi nuevo comienzo en Node JS';


//La Variable LET, es una variable que se usa solo en el conterxo donde fue definida.
//Cuando la declaro, solo se puede usar para adentro, en su contexto, no por afuera.
//Se le puede sobreescribir su valor. 

let miSegundaVariable = 'Está es mi segunda variable'

//La Variable CONST, es una variable constante, puede ser vista desde todo el codigo.
//Pero no se le puede cambiar su valor.


// Ejemplo Var global:
if (true){
    var saludo = "Hola"
    console.log(saludo)
}
console.log(saludo) //---> funciona ok!


// Ejemplo let:
if (true){
    let saludo = "Hola"
    console.log(saludo)
}
console.log(saludo)  //--->No funciona!


// Ejemplo Let: uso declarado afuera y empleado adentro. 
let saludo = "Hola";

if (true){
    console.log(saludo)  //----> Funciona ok!
}

//Ejemplo const:
const saludo = "Hola"
if (true){
    console.log(saludo) 
}
saludo = "chau"   //----> No funciona, no se le puede sobreescribi valores.


//NOTA: Let y Const se declara una sola vez en su contexto.
let saludo = 'Hola'
let saludo = 'Chau' //----> No funciona.


//Pero esto funciona: Declarada afuera, y en su contexto dentro.
let saludo = "hola"
if (true){
    let saludo = "chau"
    console.log(saludo)
}
console.log(saludo)  //---->Imprime hola