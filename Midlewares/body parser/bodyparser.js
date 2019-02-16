const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //coment here and see that now the req.body doesn't have anything. 

app.post('/bp', (req, res) => {
  console.log('body is ', req.body)
  res.send('ok')
});

app.listen(3000, () => {
  console.log('listening on 3000')
})








