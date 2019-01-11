const app = require('express')();

app.get('/', (req,res) => {
    console.log(req);
    res.send('ok');
})

app.listen(3000);