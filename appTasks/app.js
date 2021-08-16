const fs = require('fs');
let opciones = process.argv.slice(2)

const imprimir = (value) => {console.log(value.titulo)}


function leerDatos() {
    const fileData = fs.readFileSync('./tareas.json', 'utf8')
    const objeto = JSON.parse(fileData)
    objeto.forEach(imprimir)
    return objeto
} 

function escribir(objeto){    
    tareas = leerDatos()
    tareas.push(objeto)
    fs.writeFileSync("./tareas.json",JSON.stringify(tareas))
}


switch(opciones.length){
    case 0:
        console.log('Atencion : Tienes que pasar una accion');
        break;
    case 1:
        if(opciones.includes('listar')){
            leerDatos()
        }
        else{
           console.log('No entiendo que quieres hacer');
        }
        
    case 2:
        if(opciones.includes('crear')){
            for(let i=1; i<opciones.length;i++){
                console.log(opciones[i])
                escribir(opciones[i])
            }
        }
}



