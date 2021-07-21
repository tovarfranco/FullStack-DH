//Un objeto literal: son la representación en código de un elemento de la vida real.
//puede contener propiedades y metodos.
//un propiedad puede tener cualquier tipo de dato. string, numero, objeto, METODO.

let miPrimerObjeto = {
    nombre:"Franco",  //---->> propiedad:valor
    apellido:"Tovar",
    edad:23,
    saludar: function(){
        console.log("Hola a todos!, me llamo:"+this.nombre+this.apellido);
    },
}

//Ejecutar metodo de un objeto:
miPrimerObjeto.saludar();

//Función constructora: es como un molde de objeto
function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//Instanciar un objeto: persona

let persona1 = Persona("Franco","Tovar",23)
let persona2 = Persona("Alan","Tovar",26)

