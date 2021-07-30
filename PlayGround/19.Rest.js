//Se usa el operador spread (...)
//Pero utilizado como ultimo parametro de una funcion, nos permite capturar cada uno de los argumentos 
//adicionales pasados a esa funcion. Éstos parametros adicionales se consideran una lista.
//Se usa al definir una función. Siempre se debe DECLARAR al final. Sino rompe la funcion.

function loQueSea(a,b,...otros){
    console.log(otros)
}

loQueSea(1,2,3,4,5,6)  //imprime: [3,4,5,6]


//Sumar todos los elementos q nos pasen.

function sumar(...todos){
    return todos.reduce((acum,elem)=> acum+elem)
}
sumar(4,5)
sumar(1,2,3,4,1,2)


