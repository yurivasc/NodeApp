const express = require('express');
const app = express();
const mongoose = require('./mongoose');


var {SimpleUser} = require('./models/SimpleUser');
var {SimpleModel} = require('./models/SimpleModel')



app.get('/', (req,res) => {
    res.send('ok')
})

app.get('/create', (req,res) => {

    SimpleUser.insertMany([{ name: "Criado via InsertMany", age: 300 }]);
    var user = new SimpleUser({ name: "Criado via new SimpleUser", age: 500 });
    user.save().then(res.send('user criado'));
})

app.get('/get', (req,res) => {
    SimpleUser.find().then(docs => {
        res.send(JSON.stringify(docs));
    });
})

app.get('/simplemodel', (req,res) => {
    SimpleModel.find().then(docs => {
      res.send(JSON.stringify(docs));
    });

})

app.listen(3000, () => {
    console.log('listening on port 3000')
})