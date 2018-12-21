//require express and handlebards
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT  || 3000;

var app = express();

//handle bars registra partial e uma funcao que podem ser usados nos templates / views
hbs.registerPartials(__dirname + "/views/partials"); 
hbs.registerHelper("horaAgora", () => {
    return new Date().getFullYear();
});

app.use(express.static(__dirname + '/public'));

//set port and view engine
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');


// //GET
// app.get('/', function (req, res) {
//     res.send('hello world' + JSON.stringify(req.params));
// })

app.get('/', (req,res) => {
    res.render('home.hbs');
});

app.get('/m' , (req,res) => {
    res.render('m.hbs');
})

//POST
app.post('/', function (req, res) {
   res.send('POST request to the homepage')
})

//RENDER HTML WITH HANDLEBARS
app.get('/about', (req,res) => {
    res.render('about.hbs', {message:"hi from render"}); //passing data into the view
});

//passing parameters to the view. (kind of viewmodel.)


app.get('/contact', (req,res) => {
    res.render('contact', {title:"contact", message:"My message"});
});


app.listen(port, () => {console.log(`Server started on port ${port}`)});