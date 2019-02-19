const express = require('express')
const app = express();

const bookRoutes = require('./bookroutes');

app.use('/book', bookRoutes);


app.listen(3000);