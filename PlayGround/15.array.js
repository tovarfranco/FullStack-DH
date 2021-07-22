//map(): recibe una funcion como parametro. Un callback.
//Recorre el array, y devuelve un array modificado. 

let miArrayDeMap = [1,2,3,4,5]
let nuevoArray = miArrayDeMap.map(element => element+1)   //-->> [2,3,4,5,6]

let decrementoArray = miArrayDeMap.map(function (element){  //-->> [0,1,2,3,4]
    return element = element-1
})

