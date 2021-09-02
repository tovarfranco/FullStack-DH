//1) npm init  y configurar todas las cosas, o sino npm init -y, configura por defecto todo. 
//2) npm install express

//3) requerir express
const express = require('express');

//4) crear app de express
const app = express();

//5) hacer escuchar al servidor en un puerto.

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Servidor Corriento en el puerto 3000')
})

//6) Definir las rutas de requests

//7) Send: envia un mensaje string. Usa res (response) para enviar un mensaje
app.get('/',(req,res) => {
    res.send('Hola Mundo')
})

//8) SendFile: envia un archivo HTML. usa res (response) para enviar un mensaje. **Acepta ruta absoluta
app.get('/',(req,res)=>{
    res.sendFile(<h1>Esto es un HTML</h1>)
})

//9) Path: se necesita el path absoluto, y para eso uso __dirname (que tiene mi posicion actual) y path para JOIN. 
const path = require('path')

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
})







