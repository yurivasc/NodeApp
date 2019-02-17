const express = require('express');
require('express-async-errors');
const User = require('./models/user');
const app = express();
 
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.listen(3000);