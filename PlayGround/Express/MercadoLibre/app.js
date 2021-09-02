const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath))

const port = process.env.PORT || 3000

app.listen(port, (req,res) =>{
    console.log("server running in port 3000")
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})