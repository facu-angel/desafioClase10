const express = require('express')
const app = express()
const Libreria = require('./contenedor')
const libreria = new Libreria('./files.json')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('form')
})

app.post('/productos', (req, res)=>{
    res.render('form')
    res.json(libreria.insert(req.body))
})

app.get('/productos',(req, res)=>{
    const productos = libreria.array
    res.render('list',{
        products: productos
    })
})

app.listen(8080)