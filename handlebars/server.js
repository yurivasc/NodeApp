const express = require("express");
const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  
    res.render('index.hbs', {
      pageTitle: 'Title1',
      welcomeMessage: 'Welcome to handle bars handlers..',
    });
    
  });
app.listen(3000, () => {
  console.log("3000");
});
