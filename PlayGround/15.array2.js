///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//map(): recibe una funcion como parametro. Un callback.
//Callback: recibe cada elemento del array
//Devuelve: un array modificado. 

let miArrayDeMap = [1,2,3,4,5]
let nuevoArray = miArrayDeMap.map(element => element+1)   //-->> [2,3,4,5,6]

let decrementoArray = miArrayDeMap.map(function (element){  //-->> [0,1,2,3,4]
    return element = element-1
})

//calcular el doble de los elementos de un array
let elDoble = miArrayDeMap.map(element => element*2)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Filter(): recibe una funcion como parametro. Un callback
//Callbak: recibe cada elemento del array
//Devuelve: un nuevo array con los elementos que cumple la condición dada por la función.
let mayoresQueDos = miArrayDeMap.filter(element => element>2)
console.log(mayoresQueDos)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Reduce(): como parametro un callback
//callback: recibe 2 elementos,acumulador y elemento, y se ejecutará sobre cada elemento del array. 
//Devuelve: acumulador.

//sumar elementos de un array:
let suma = miArrayDeMap.reduce((acum,element) => acum+element)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//forEach(): como parametro un callback
//Callback: recibe 1 elemento, y se ejecutará sobre cada elemento del array. 
//Devuelve: nada.

miArrayDeMap.forEach(element => console.log(element))


//Sumar elementos del array:
let acum = 0
miArrayDeMap.forEach(function (element){
    acum = acum + element
})

console.log(acum)






//Ejerciciso: 
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(objeto => objeto.promedio>6)
let desaprobados = estudiantes.filter(objeto => objeto.promedio<7)


//
let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map(element => element-1)


//
let vueltas = [5, 8, 12, 3, 22]
let totalVueltas = vueltas.reduce((acum,element)=>acum+element)

//
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];


listaDeSuperMercado.forEach(element => console.log(element))

