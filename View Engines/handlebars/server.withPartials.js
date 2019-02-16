//require express and handlebards
const express = require('express');
const hbs = require('hbs');


var app = express();

hbs.registerPartials(__dirname + "/views/partials")
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');


//GET
app.get('/', function (req, res) {
    res.send('hello world' + JSON.stringify(req.params));
})

//POST
app.post('/', function (req, res) {
   res.send('POST request to the homepage')
})

//RENDER HTML WITH HANDLEBARS
app.get('/about', (req,res) => {
    //res.render('about.hbs'}); //without passing data to the view. 
    res.render('about.hbs', {title:"yuri", message:"hi from render"}); //passing data into the view
});

//passing parameters to the view. (kind of viewmodel.)


app.get('/contact', (req,res) => {
    res.render('contact', {title:"contact", message:"My message"});
});


app.listen(3000, () => {console.log("Server started on port 3000")});