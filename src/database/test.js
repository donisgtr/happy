const Database = require('./db');

/* asyncy e await */

Database.then(async db => {
    // inserir dados na tabela
/*     await db.run(`
        INSERT INTO orphaneges (
            lat, 
            lng,
            name,
            about,
            whatsapp, 
            imagens, 
            intructions, 
            opening_hours, 
            open_on_weekends
        ) VALUES(
            "-27.222633",
            "-49.6555874",
            "Lar das meninos",
            "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            "11960688434",
            "https://images.unsplash.com/photo-1597095556745-7bcd893840ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1598454444233-9dc334394ed3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "0"
        );
    `) */
    
    // consultar dados na tabela
    //const selectOrphanages = await db.all(" SELECT * FROM orphaneges") 
    //console.log(selectOrphanages)  
    // parei no minuto 37
})