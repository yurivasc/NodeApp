const express = require('express');

var app = express();


function middleHandler(req, res, next) {
    console.log("execute middle ware");
    next();
}

app.use(function (req, res, next) {
    console.log("first middle ware");                                                                                                             
    next();
});

app.use(function (req, res, next) {
    console.log("second middle ware");                                                                                                             
    next();
});


app.get('/', middleHandler, (req,res)=>{
    res.send('hi');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})