// Funcion: bloque de codigo que permite agrupar funcionalidad para ser usada. Realiza tarea y retorna valor.
//tiene nombre (suma), parametros (a,b) y retorno. 

function suma(a,b){
    return a+b;
}

//Funciones declaradas: se usa la estructura básica. function + nombre + parametros. 
function saludar(cantidad){
    return 'hola'.repeat(cantidad)
}
let saludos = saludar(6)

//Funciones expresadas: no tiene nombre, es anónima. Se asignan a una variable.
let copiarse = function (machete){
    return machete + 'es Perón'
}
console.log(copiarse('respuesta de la 7'))

//NOTA: Parametros es cuando definimos la función. Argumentos es cuando la invocamos. 


//Scope: alcance de una variable. Se definen por funciones. 
function saludar(){
    let saludo = "hola"; //es el scope local a ésta funcion. 
}
//No se puede acceder desde afuera. 

//Pero el return nos ayuda:
function saludar(){
    let saludo = "hola";
    return saludo;
}
let saludo = saludar()


//Toda variable que declaremos fuera de funciones, son como "globales" y las funciones tienen acceso:
let saludo = "hola";  //-->>tiene scope global, se la accede desde cualquier lado.
function saludar(){
    console.log(saludo)  //-->>Funciona ok
}

