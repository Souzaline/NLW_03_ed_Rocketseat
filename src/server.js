
// importar um pacote 
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

// iniciando o express
const server = express()

server
    // utilizar body no req
    .use(express.urlencoded({extended: true}))

    // utilizando arquivos estaticos
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // criar uma rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// Ligar o servidor 
server.listen(5500)
