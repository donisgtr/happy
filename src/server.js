//Importantando a dependencia
const express = require('express');
const path = require('path'); /* isso já e do Node */

//Iniciando o Express
const server = express();

server
    /* utilizando arquivos estaticos */
    .use(express.static('public'))
    
    /* configurar template engine */
    .set('views', path.join(__dirname, "view"))
    .set('views engine', 'hbs')

    // Criar uma Rota e/ou Caminho
    .get('/', (request, response) => {
        /* vai contanecar o texto de dirname com o outro */
        return response.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

// Ligar o servidor
server.listen(5500);