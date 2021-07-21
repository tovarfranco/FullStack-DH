//Arrays permiten generar una colección de datos ordenados.

//---No importa el tipo de dato almacenado. Puede ser varios. 
let miPimerArray = [1,2,"hola","chau"] 

//---Posiciones de un array. Arranca con el cero.
let pelisFavoritas = ["El origen","Matrix"]
console.log(pelisFavoritas[0]);

//Longitud:
let longitud = pelisFavoritas.length;

//Metodos: cuando una funcion le pertenece a un objeto. Los arrays son un objeto. 

//.push(): agrega elemento al final del array.
let seriesParaVer = ["Peaky Blinders","GOT"]
seriesParaVer.push("School Sex")   //---->>De a uno
seriesParaVer.push("StrangerThings","Narnia") //---->>De a dos

//.pop(): eliminar y devuelve el ultimo elemento.
let ultimaSerie = seriesParaVer.pop()
console.log(ultimaSerie)  //--->Narnia

//.shift(): eliminar el primer elemento de un array y lo devuelve.
let primeraSerie = seriesParaVer.shift()
console.log(primeraSerie) //--->Peaky

//unshift(param): agrega uno o varios elementos al inicio.
seriesParaVer.unshift("Megalodon");
seriesParaVer.unshift("RapidoYFurioso","La teoria del Todo")
console.log(seriesParaVer)  //-->> ["RapidoYFurioso","La teoria del Todo","Megalodon".....]

//.join(param): retorna string con elementos unidos.Recibe separador.

let dias = ["lunes", "martes", "miercoles"]
let separadosComa = dias.join() //--->  "lunes,martes,miercoles"
let separadosGuion = dias.join('-') //--->  "lunes-martes-miercoles"

//.indexOf(param): devuelve la primera posicion del elemento que se la pase.
let frutas = ["manzana","pera","naranjas","manzana"]
let manzana = frutas.indexOf("manzana")  //---> 0

//.lastIndexOf(param): al reves. Recorre de final a inicio y devuelve la posicion del primer elemento que encuentre
let paises = ["argentina","brasil","colombia","brasil"]
let brasil = paises.lastIndexOf('brasil')  //--> 3

//.includes(param): devuelve true o false si el elemento está en el array.
let continentes = ["oceania","america"]
console.log(continentes.includes("Asia"))  //---> False
