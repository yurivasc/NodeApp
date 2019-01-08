// npm install cookie-parser
const express = require('express');
var cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser());


app.get('/', (req, res) => {
    res.cookie('cookiename', 'anotherValue', { maxAge: 900000, httpOnly: true });

    res.send(req.cookies);
});

app.get('/clear', (req, res) => {
    res.clearCookie('cookiename');
    res.send('limpei cookie name');
});

app.listen(3000, () => {
    console.log('listening 3000')
});