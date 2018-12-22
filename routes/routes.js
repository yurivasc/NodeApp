const registry = (app) => {

    console.log('registring routes');

    app.get('/', (req, res) => {
        res.render('home.hbs');
    });

    app.get('/m', (req, res) => {
        res.render('m.hbs');
    })

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

}

module.exports = {
    registry
}