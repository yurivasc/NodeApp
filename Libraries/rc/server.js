const express = require('express');
const app = express();
const rc = require('rc');

app.get('/', (req,res) => {
    res.send('ok')
});


app.listen(3000, console.log('http://localhost:3000'))