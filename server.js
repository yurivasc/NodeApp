//require express and handlebards
const express = require('express');

const port = process.env.PORT  || 3000;

var app = express();

//Enable cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


var obj = {
    name: "yuri",
    age: 30,
    somethingelse: {another: "thing"}
}

app.get('/', (req,res) => {
    res.send('server on');
})

app.get('/json', (req,res) => {
    res.send(obj);
})

app.get('/api', (req,res) => {
    res.send(obj);
})


app.listen(port, () => {console.log(`Server started on port ${port}`)});