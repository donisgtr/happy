function saveOrphanege(db, orphanege) {

    return db.run(`
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
                "${orphanege.lat}",
                "${orphanege.lng}",
                "${orphanege.name}",
                "${orphanege.about}",
                "${orphanege.whatsapp}",
                "${orphanege.imagens}",
                "${orphanege.intructions}",
                "${orphanege.opening_hours}",
                "${orphanege.open_on_weekends}"
            );
        `) 
}


module.exports = saveOrphanege;

