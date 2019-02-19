const express = require('express')

const app = express();

const bookRouter = require('./bookroutes');

app.use('/book', bookRouter);


app.listen(3000);