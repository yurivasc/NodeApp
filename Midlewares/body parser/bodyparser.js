const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //coment here and see that now the req.body doesn't have anything. 

app.get('/', (req,res) => {
  res.send(`
    <h1> BP </h1>
    <form method="post" action="/bp">
      <input type="text" name="user"/>
      <input type="submit" value="send">
    </form>
  `)
})

app.post('/bp', (req, res) => {
  console.log('body is ', req.body)
  res.send('the user is:' + req.body.user)
});

app.listen(3000, () => {
  console.log('listening on 3000')
})