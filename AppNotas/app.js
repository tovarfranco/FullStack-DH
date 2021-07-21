
const process = require('process')
const tasks = require('./funciones/deTareas.js')
let params = process.argv.slice(2,)
let action = params[0]

switch(action){
    case 'listar':
        tasks.showTasks(tasks.readTasks());
        break;
    case undefined:
        tasks.warning();
        break;
    default:
        tasks.error();
        break;
}

