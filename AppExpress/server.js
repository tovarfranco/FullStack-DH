const express = require('express');
const app = express();

const path = require('path');   //sirve ṕara saber donde estoy parado. 
const port = 8080;


app.listen(port,() => {
    console.log("Estoy corriendo en el puerto 8080")
});

app.get('/', (req,res) => {
    res.send("hola mundo")
})

app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname, '/web/index.html'))   //podria harcodear la dirección absoluta, pero node nos ofrece path, que nos permite desligarnos de nuestro ordenador y pueda buscarlo asi sea donde este hsoteado. 
})


//otra forma puede ser. path.resolve()+'web/index.html'
//path.resolve() nos devuelve la ruta absoluta.