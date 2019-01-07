//require express and handlebards
const express = require('express');

const port = process.env.PORT  || 3000;

var app = express();

app.get('/', (req,res) => {
    res.send('ok');
})


app.listen(port, () => {console.log(`Server started on port ${port}`)});