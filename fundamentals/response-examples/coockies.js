
const express = require('express');
const app = express();

const publicFolder = __dirname + '/public';
const image = publicFolder + '/myimage.png';

app.set("view engine", "hbs");


app.get('/', (req,res)=> {
    res.render('index.hbs');
    res.setHeader("Access-Control-Allow-Headers", ["Content-Type, Accept"]);
})

//not working, don't know why
app.post("/setcoockie", (req, res) => {
  res.setHeader("Access-Control-Allow-Headers", ["Content-Type, Accept"]);
  res.setHeader("Set-Coockie", "nome=yuri");
  res.end("ok");
});



app.get('/setCoockie2', (req,res) => {
    // res.cookie("name", "vasconcelos", {maxAge: 99999});
    res.end('ok');
})


app.listen(3000, (req, res) => { })