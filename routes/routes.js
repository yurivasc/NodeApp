const registry = (app) => {

    console.log('registring routes');

    app.get('/', (req, res) => {
        res.render('home.hbs');
    });

    //POST
    app.post('/', function (req, res) {
        res.send('POST request to the homepage')
    })

    //RENDER HTML WITH HANDLEBARS
    app.get('/about', (req, res) => {
        res.render('about.hbs', { message: "hi from render" }); //passing data into the view
    });

    //passing parameters to the view. (kind of viewmodel.)


    app.get('/contact', (req, res) => {
        res.render('contact', { title: "contact", message: "My message" });
    });

    
    app.get('/error', (req,res) => {
        res.render('error.hbs', {message: "testing"});
    })

}

module.exports = {
    registry
}