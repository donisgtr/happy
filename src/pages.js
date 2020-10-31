
module.exports = {
    index(req, res) {
        return res.render('index')
    },
    orphanege(req, res) {
        /* quando eu chamar essa funtion ela vai retonar esse html */
        return res.render('orphanege' )
    },
    orphaneges(req, res) {
        return res.render('orphaneges', { orphaneges })
    }
}