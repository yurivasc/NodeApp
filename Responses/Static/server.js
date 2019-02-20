const express = require('express');
const app = express();

express.static('./files')l
app.get('/', (req, res) => { 
    res.send('ok')
});


app.listen(3000, () => { console.log('listening on 3000' )})