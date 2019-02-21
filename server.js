const express = require('express');
const app = express();
const startupDebugger = require('debug')('app:startup')
const anotherDebugger = require('debug')('app:another')

if (app.get('env') == "development"){
    startupDebugger('ok')
}

app.get('/', (req, res) => { 
    res.send('ok')
});


app.listen(3000, () => { console.log('http://localhost:3000' )})