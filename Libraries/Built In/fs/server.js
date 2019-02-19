const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs'); //https://nodejs.org/api/fs.html

fs.exists(`c:`, (exists) => {
    console.log(exists); //true
})

const readdir = fs.readdirSync("c:\\tmp\\"); // ['node'] array with folders/files 
console.log(readdir);

const file = path.join(__dirname, 'fsread.txt')
console.log(file);

fs.readFile(file, (err, data) => {
    console.log(data.toString());
});

fs.readFile(file, {encoding: 'utf-8'}, (err, data) => console.log(data));

fs.readFileSync(file, 'utf-8', (err, data) => {
    console.log('data is', data);
})


fs.writeFile(file, 'abc', (err) => {console.log(err)});
fs.appendFile(file, 'ok', (err) => {});

app.listen(3000)