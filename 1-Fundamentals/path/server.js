const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('hi');
})

//http://localhost:3000/simplepath
app.get('/simplePath', (req,res)=> {
    res.send('hi')
});

//http://localhost:3000/path/123
app.get('/path/:id', (req,res)=>{
    res.send('hi' + req.params.id);
})

//http://localhost:3000/path/123/about
app.get('/path/:id/about', (req, res) => {
    res.send('about' + req.params.id);
})

//localhost:3000/path/123/about/mymessag
http: app.get("/path/:id/about/:message", (req, res) => {
  res.send("about" + req.params.id + req.params.message);
});



app.listen(3000, () => {
    console.log('listening on 3000')
})

