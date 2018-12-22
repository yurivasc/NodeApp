const registry = function (app) {

    console.log("registering apis")
    app.get('/api', (req, res) => {
        res.send(myObject);
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