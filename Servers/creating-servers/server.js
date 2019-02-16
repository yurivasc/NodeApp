const path = require('path')
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const { User } = require('./models/User');
const { Book } = require('./models/Book');

const publicPath = path.join(__dirname, '../public');

console.log(publicPath);


app = express();

var server = http.createServer(app);


app.use(express.static(publicPath));

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
    }, (e) => {
        console.log(e);
        res.status(400).send(e);
    });
});

app.get('/getusers', (req, res) => {

    const user = User.find({})
        .then(users => {
            console.log(users);
            res.header("x-teste2", "123abc");
            res.send(users);
        }).catch(e => {
            console.log(e);
        });
});


var auth = (req, res, next) => {
    console.log('auth actioned');
    if (1 == 1) {
        //do something
        next();
    } else {
        res.status(404).send();
    }
}


app.get('/getUser/:userId', (req, res) => {
    console.log(req.params);

    const { userId } = req.params;

    User.findById(userId).then((user) => {
        res.send(user, null, 2);
    }).catch(e => {
        console.log(e);
        res.status(400).send(e);
    })
})

app.get('/createuser', (req, res) => {

    User.create({
        nome: "joao1", age: 30, tokens: [{
            access: "hi",
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDU2MDE1NjR9.X_MsUGZpe5-KsQ9HarkuKHeLoDGPMYiN5WjPMwK0NCE'
        }]
    })
        .then(x => { console.log(x) })
        .catch(e => { console.log(e) });
    res.send("user criado");


})


app.get('/modelmethods', (req, res) => {
    res.send(User.schema.methods.customMethod());
    // res.send(User.schema.methods.customstaticMethod()); //methodos estaticos nao podem ser chamados
})

app.delete('/delete/:userId', (req, res) => {
    User.findOneAndRemove({ _id: req.params.userId }).then((user) => {
        res.send("usuario deletado")
    }).catch(e => res.status(404).send(e));
})

server.listen(3000, () => {
    console.log('listening server on port 3000');
})