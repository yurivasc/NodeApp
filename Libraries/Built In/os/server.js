const express = require('express');
const app = express();
const os = require('os');

console.log(os);
console.log(os.hostname(), os.freemem, );
//DESKTOP-SVNU7U8 3633008640



app.listen(3000)