//yarn add update
//set DEBUG=app:startup

const express = require('express');
const app = express();
const debug = require('debug')('app:startup')

app.get('/', (req, res) => { 
    debug('test');
    res.send('ok')
    
});


app.listen(3000, () => { console.log('http://localhost:3000' )})