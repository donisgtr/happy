const Database = require('./db');
const saveOrphanege = require('./saveOrphanege');

/* asyncy e await */

Database.then(async db => {
    // inserir dados na tabela
/*      await saveOrphanege(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos Meninos",
        about: "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "1196060688484",
        images: [
            "https://images.unsplash.com/photo-1597095556745-7bcd893840ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1598454444233-9dc334394ed3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    },)  */
    // consultar dados na tabela
    //const selectOrphanages = await db.all(" SELECT * FROM orphaneges") 
    //console.log(selectOrphanages)  
    // parei no minuto 37

    //consultar somente um ofphaneges classe
    //const id = 3;
    const orphanege = await db.all('SELECT * FROM orphaneges') // WHERE id ="' + id + '"')
    console.log(orphanege)  

    // deltar dado da tabele
    //console.log(await db.run("DELETE FROM orphaneges where id = '3'")) 
    //console.log(await db.run("DELETE FROM orphaneges where id = '4'"))

})