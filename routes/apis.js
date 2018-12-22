const registry = function (app) {

    console.log("registering apis")
    app.get('/api', (req, res) => {
        res.send(myObject);
    })

    app.get('/api/test', (req,res) => {
        res.render('error.hbs', {message: "testing"});
    })
}

const myObject = {
    name: 'yuri',
    age: 27,
    gender: 'male'
}

module.exports = {
    registry
}