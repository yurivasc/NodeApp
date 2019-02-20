var jwt = require("jsonwebtoken");

var token = jwt.sign({ foo: "bar" }, 'secret', (err, res) => {
    console.log(res);

    const isVerified = jwt.verify(res, 'secret', (err, res) => {
        console.log(err, res);
    })

});
