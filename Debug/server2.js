const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    res.send('ok') 
});

app.get('/another', (req, res) => { 
    res.send('ok') 
});


app.listen(3000, () => { console.log('listening on 3000' )})

app.get('/', (req, res) => { 
    console.log('route ok') 
    res.send('ok') 
});
