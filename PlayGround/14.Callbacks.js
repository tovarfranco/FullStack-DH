//En JS, las funciones son un tipo de dato mas. Podemos tenerlas dentro de variables o recibirlas
//de argumento dentro de una funcion. Ésto nos permite desarrollar CALLBACKS.
//¿Si pudiesemos recibir como argumento de una función, OTRA función y ejecutarla?

//Callbak: funcion que se pasa como parametro a otra función, quien se encarga de ejectuarla cuando quiera.

//CallBack Anónimo: no tiene nombre, función anónima. 
setTimeout(function(){
    console.log("Se termino el tiempo")
},1000)  //---> cuando llegue a 1000, quiero que se ejecute la función


//CallBack Definido: tiene nombre.
let miCallback = () => console.log("Se termino el tiempo")
setTimeout(miCallback,1000)

//Ejemplo:
let decirNombre = (nombre,apellido) => nombre + " " +apellido
function saludar(nombre,apellido,CallBack){
    return "Hola, me llamo:" + CallBack(nombre,apellido)
}
saludar("Franco","Tovar",decirNombre);

//Ejemplo2: contar hasta 10 y correr!!

let correr = () => console.log("Correr!!!");
let saltar = () => console.log("Saltar!!!");

function contar(CallBack){
    for (let i=0; i<=10; i++){
        console.log(i)
    }
    CallBack();
}
contar(correr);  //cuanto hasta 10 y corro
contar(saltar); //cuanto hasta 10 y salto

//Contar ejecuta la función que le mandes. 
