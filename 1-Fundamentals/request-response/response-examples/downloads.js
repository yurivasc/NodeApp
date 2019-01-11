//https://expressjs.com/en/api.html#res

const express = require('express');
const app = express();

const publicFolder = __dirname + '/public';
const image = publicFolder + '/myimage.png';

app.get('/download1', (req, res) => {
    res.attachment(image); //wil download the file
    res.send('ok');
})

app.get('/download2', (req,res) => {
    res.download(image); //will download the file
});

app.get('/download3', (req, res) => {
    res.sendFile(image); //will open the file in the brownser
});


//The key is to set the response header to a 'Content-disposition', 'attachment; filename=theDocument.txt'
app.get('/download4', (req,res) => {
    res.setHeader('Content-disposition', 'attachment; filename=my image.png');
    res.setHeader('Content-type', 'text/plain');
    res.sendFile(image);
})


app.listen(3000, (req, res) => {})