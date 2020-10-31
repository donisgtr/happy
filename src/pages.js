const Database = require('./database/db');
const saveOrphanege = require('./database/saveOrphanege');


module.exports = {
    index(req, res) {
        return res.render('index')
    },
    async orphanege(req, res) {
        /* quando eu chamar essa funtion ela vai retonar esse html */
        
        const id = req.query.id
        
        try {   
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphaneges WHERE id="${id}"`)
            const orphanege = results[0]
            // enviar para template engine
            orphanege.imagens = orphanege.imagens.split(',') 
            orphanege.firstImagem =  orphanege.imagens[0]
            // toda vez que voce achar uma virgula quebra ele e transforma um array.
            
            //if ternario
            //orphanege.open_on_weekends = "0" ? false : true
             
            if (orphanege.open_on_weekends == "0") {
                orphanege.open_on_weekends = false
            } else {
                orphanege.open_on_weekends = true
            }

            return res.render('orphanege', { orphanege })
            
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },
    async orphaneges(req, res) {
        try {
            const db = await Database;
            const orphaneges = await db.all('SELECT * FROM orphaneges')
            return res.render('orphaneges', { orphaneges })
        } catch (error) {
            console.log(error)
            return res.send("Erro no Banco de Dados")
        }

    }
}