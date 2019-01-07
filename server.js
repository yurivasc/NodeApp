//require express and handlebards
const express = require('express');

const port = process.env.PORT  || 3000;

var app = express();


var obj = {
    name: "yuri",
    age: 30,
    somethingelse: {another: "thing"}
}

app.get('/', (req,res) => {
    res.send(obj);
})


app.listen(port, () => {console.log(`Server started on port ${port}`)});