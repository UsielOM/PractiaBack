//Objeto de express
const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {

    console.log(`El servidor esta listo y escuchando en el puerto: ${port}`);
});

app.get('/', function(request, response) {
    response.send("MI PRIMER SERVIDOR DE EXPRESS");
});


require('./../app/routes/arrow.js')(app);