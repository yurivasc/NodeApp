//require express and handlebards
const express = require('express');
const hbs = require('hbs');
const routes = require('./routes/routes');
const apis = require('./routes/apis');

const port = process.env.PORT  || 3000;

var app = express();

hbs.registerPartials(__dirname + "/views/partials"); 
hbs.registerHelper("horaAgora", () => {
    return new Date().getFullYear();
});

app.use(express.static(__dirname + '/public'));

//set port and view engine
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');

routes.registry(app);
apis.registry(app);

app.listen(port, () => {console.log(`Server started on port ${port}`)});