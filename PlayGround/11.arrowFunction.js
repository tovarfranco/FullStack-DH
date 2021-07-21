//Las funciones arrow, son siempre anónimas. No tienen nombre. 
//Si queremos nombrarlas, hay que EXPRESARLAS. Es decir, asignarlas como valor a una variable. 
let sumar = (a,b) => a+b;

//Los parametros van entre paréntesis (), si no recibe se los escribe igual.
let restar = (a,b) => a-b;
let decirHolar = () => console.log("hola")

//Si recibe un solo parametro, se puede omitir los parentesis.
let mostrarPalabra = palabra => console.log(palabra)
let doble = a => a*2

//No es necesario RETURN si es una linea de codigo. 
let dividir = (a,b) => a/b;

//Si se usa mas de una linea, hay que usare RETURN:
let esPar = a => {
    let resto = a%2;
    return resto == 0;
}





