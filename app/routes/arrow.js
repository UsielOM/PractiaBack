module.exports = function(app) {

    app.get('/Saludos', function(req, res) {
        res.send("Hola amigos y amigas ")
    });

    app.get('/arrow', (req, res) => {
        res.send("Esto es un ArrowFunction =>");
    })

}