//new Date():
//recibe:nada, ó año,mes,dia. 
//crea un objeto fecha del dia de hoy si no le pasas nada, sino del dia q le pases.
let miFecha = new Date()
let otraFecha = new Date(2023,1,20)

//.getDate()
//Recibe: nada
//Retorna: dia de miFecha
let hoy = miFecha.getDate()
console.log(hoy)

//.getDay()
//Recibe:nada
//Retorna: numero del dia de miFecha ej:0-> domingo, 6->sabado
let diaDeHoy = miFecha.getDay()
console.log(diaDeHoy)

//.getMonth()
//Recibe: nada
//Retorna: mes de miFecha
let mes = miFecha.getMonth()
console.log(mes)

//.getFullYear()
//Recibe: nada
//Retorna: año de miFecha
let año = miFecha.getFullYear()
console.log(año)

