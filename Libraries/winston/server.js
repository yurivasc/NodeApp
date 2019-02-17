const express = require('express');
const app = express();
const winston = require('winston');
 
app.get('/', async (req, res) => {
  res.send('ok');
});

app.listen(3000);