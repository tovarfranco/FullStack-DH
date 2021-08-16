//Los strings se pueden considerar como un array de caracteres.

let miPrimerString = 'Franco'

let primeraLetra = miPrimerString[0] //--->> F

let longitud = miPrimerString.length //--->> 6
 
let indexF = miPrimerString.indexOf('F')  //--->> 0

let cortada = miPrimerString.slice(1,2)   //--->> ra    slice(1,) seria todo el resto

let trimmeada = miPrimerString.trim() 

let incluye = miPrimerString.includes('F') //--->> True

//

let miSegundoString = 'Hola, mi nombre es Franco'

let spliteada = miSegundoString.split(',')   //--->> ['Hola',' mi nombre es Franco']

miSegundoString.replace('Franco','Alan')  //-->> 'Hola, mi nombre es Alan'
