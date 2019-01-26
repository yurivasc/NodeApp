//require express and handlebards
const express = require('express');
const path = require('path');

const port = process.env.PORT  || 3000;

var app = express();

app.use(express.static(__dirname + "/PWA"));


//Enable cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/', (req,res) => {
    res.sendFile('index.html', { root: path.join(__dirname+ '/PWA') });
})


app.get('/api', (req,res) => {
    res.send({name: "yuri"});
})

app.listen(port, () => {console.log(`Server started on port ${port}`)});