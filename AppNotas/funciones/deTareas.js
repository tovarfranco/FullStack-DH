const fs = require('fs')
//Devuelve Objeto array de tareas. No Recibe nada.
let readTasks = () => JSON.parse(fs.readFileSync('tareas.json','utf-8'))

//Muestra en pantalla un Objeto de tareas. Recibe un objeto array de tareas.
let showTasks = (tasks) => console.log(tasks)

//Muestra en pantalla los titulos de las tareas. Recibe un array de tareas.
let readTitle = (tasks) => {
    tasks.forEach(element => console.log(element.title));
}

//Muestra en pantalla los status de las tareas. Recibe un array de tareas.
let readStatus = (tasks) => {
    tasks.forEach(element => console.log(element.status))
}

let warning = () => console.log("Atención, debe introducir palabra")
let error = () => console.log("No entiendo que realizar.")

module.exports = {readTasks, readTitle, showTasks, readStatus, warning, error}