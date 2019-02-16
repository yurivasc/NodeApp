const express = require('express');

const app = express();

app.get('/', (req,res) => {
    console.log(req.ip);
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.protocol);
})


app.listen(3000, (req,res) => {
    res.send('hi');
})