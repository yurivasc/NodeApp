const express = require('express');
var bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');

const { User } = require('./models/User');
const { Book } = require('./models/Book');


var app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send("hi");
})

app.post('/newUser', (req, res) => {

    var newUsuario = new User({
        nome: req.body.nome,
        idade: req.body.idade,
        ativo: req.body.ativo,

    })

    newUsuario.save().then((doc) => {
        console.log(doc);
        res.send(doc);
        
    }, (e)=>{
        console.log(e);
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
})