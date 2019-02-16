//cors midleware
const enablecors = (req, res) => {
    //Enable cors
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
}

module.exports =  {
    enablecors
}