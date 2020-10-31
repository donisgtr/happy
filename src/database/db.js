/* como faz para importar um pacote do npm? */

/* estou pedindo para o meu banco de dados abra  o meu __dirname 
o meu diretorio atual e nesse diretorio crie uma arquivo chamado  e criar esse arquivo leva um tempo, se não existir, essa funçao open tem essa inteligecia, porem o Javascript executa linha a linha, e eu so posso continuar depois que eu abrir meu banco de dados. no caso do Objeto OPEN ele tem um PROMISSE */

/* o que faz esse then() ? */

const Database = require('sqlite-async');

function execute(db) {
    /* aqui vamos escrever o SQL igual escreveria no ORACLE */
     return db.exec(`
        CREATE TABLE IF NOT EXISTS orphaneges (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            imagens TEXT,
            intructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)     
}


/* modue.exports e um objeto que vai pegar o resultado que foi atribuio a ele e jogar para fora
qual é o resultado disso dai? e o db que esta sendo return pela função execute */
module.exports = Database.open(__dirname + '/database.sqlite').then(execute);