const exp = require('constants');
const express = require('express');
const path = require('path');

const app = express()

const publicPath = path.resolve(__dirname,'./public');
app.use( express.static(publicPath) );

const port = process.env.PORT || 3000
app.listen(3000,()=>{
    console.log("Server corriendo en el puerto 3000")
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})