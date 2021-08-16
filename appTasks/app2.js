const fs = require('fs');
let opciones = process.argv.slice(2)

let accion = opciones[0]

const imprimir = (value) => {console.log(value.titulo)}


function leerDatos() {
    const fileData = fs.readFileSync('./tareas.json', 'utf8')
    const objeto = JSON.parse(fileData)
    objeto.forEach(imprimir)
    return objeto
} 

switch(accion){
    case undefined:
        console.log("Debe enviar una accion");
        break;
    case 'listar':
        leerDatos();
        break;

    default:
        console.log("No entiendo")
        break;
}