//Importantando a dependencia
const express = require('express');
const path = require('path'); /* isso já e do Node */
const pages = require('./pages.js');

//Iniciando o Express
const server = express();
server
    /* utilizando arquivos estaticos */
    .use(express.static('public'))
    
    /* configurar template engine */
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Criar uma Rota e/ou Caminho
    .get('/', pages.index)
    .get('/orphanege', pages.orphanege)
    .get('/orphaneges', pages.orphaneges)
    
    /* vai contanecar o texto de dirname com o outro */

// Ligar o servidor
server.listen(5500);