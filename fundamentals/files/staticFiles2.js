const express = require('express');
const app = express();
const path = require('path');

const publicFolder = path.join(__dirname, 'public');

//Example 1
//this way only the /publicfile.txt works and /public/publicfile.txt doesn't work
app.use(express.static(publicFolder));


//Example 2---------------------------------------------
// this way the request /public/publicfile.txt works
// app.use("/public", express.static(publicFolder)); 

app.get('/', (req, res) => {
    res.redirect('http://localhost:3000/publicfile.txt'); //example 1
    // res.redirect('http://localhost:3000/public/publicfile.txt'); //example 2
})

app.listen(3000);