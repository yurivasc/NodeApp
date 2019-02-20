const express = require('express');
const app = express();
const path = require('path');

const txt = path.join(__dirname, 'public', 'abc.txt')
const image = path.join(__dirname, 'public', 'myimage.jpg')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => { 
    res.send('ok') 
});

app.get('/status', (req, res) => { 
    res.status(404).send('ok');
});


//This method sends a response (with the correct content-type) and the parameter converted to a JSON string using [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
app.get('/json', (req, res) => { 
    res.send({name:"yuri"}) 
});


app.get('/sendFile', (req, res) => { 
    console.log('route ok') 
    res.sendFile(txt)
});

app.get('/attachment', (req, res) => {
    console.log(image);
    res.attachment(image); 
    res.send('ok');
})

app.get('/download', (req,res) => {
    res.download(image, 'renamedimage.png');
});


//needs to define a engine
app.get('/render', (req, res) => { 
    app.set('view engine', 'hbs')
    console.log('route ok') 
    res.render("form.hbs", {name: "yuri"});
});



app.listen(3000, () => { console.log('listening on 3000' )})