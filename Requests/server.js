
// req.query  =  localhost:3000/bp?name=yuri   the query will be name=yuri
// req.body   =  inputs from your form.  
// req.params =  /user/123  - params = 123


const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/get', (req, res) => {
  console.log('body is ', req.body, ' req is ', req.query, ' params is ', req.params);
  res.send('get ok')
});

app.get('/get/:id', (req, res) => {
  console.log('body is ', req.body, ' req is ', req.query, ' params is ', req.params);
  res.send('get with params ok')
});

app.post('/post', (req, res) => {
  console.log('body is ', req.body, ' req is ', req.query, ' params is ', req.params);
  res.send('post ok')
});


app.listen(3000, () => {
  console.log('listening on 3000')
})

// form type post, recebe os inputs via req.body
// form type get , recebe os inputs via req.query

/* 

  <form method="POST" action="http://localhost:3000/bp" >
    <input type="text" name="firstInput">
    <input type="text" name="secoundInput">
    <button type="submit">SEND</button>
  </form>

*/