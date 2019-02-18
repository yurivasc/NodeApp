const express = require('express');
const app = express();
const fs = require('fs'); //https://nodejs.org/api/fs.html

fs.exists(`c:`, (exists) => {
    console.log(exists); //true
})

const readdir = fs.readdirSync("c:\\tmp\\"); // ['node'] array with folders/files 
console.log(readdir);

fs.readFile('C:\\tmp\\node\\fsread.txt', (err, data) => {
    console.log(data);
});

app.listen(3000)