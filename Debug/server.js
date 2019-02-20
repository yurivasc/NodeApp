const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('ok')
});


//open chrome://inspect/#devices
//Open dedicated DevTools for Node
// go to connection tab, and add localhost:3000
//run the server using --inspect
//nodemon --inspect server.js
//create a breakpoint.

app.listen(3000, console.log('http://localhost:3000'))