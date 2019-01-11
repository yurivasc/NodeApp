const express = require('express');
const mymiddleware = require('./midlewareexample');
const app = express();

var mw = mymiddleware.mw;
var mw404 = mymiddleware.mw404


app.get('/', mw, (req,res) => {
    res.send('hi mw');
})

app.get('/404', mw404, (req,res) => {
    res.send('.. will this be executed?'); //no, the 404 middleware is throwing the response already, so this won`t be executed.
})

app.listen(3000, () => {
    console.log('listenning on port 300')
});
