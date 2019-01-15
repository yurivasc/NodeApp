console.log('starting app');

const fs = require('fs');


//Writing to a file
fs.appendFile('greetings.txt', '/n another', () => {});
console.log('created / updated the greetings.txt')


//reading from a file
var file = fs.readFile('greetings.txt', () => {});
console.log(file);


fs.readFile('greetings.txt',  (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
});


fs.appendFile()
fs.open()
fs.writeFile()

//To delete a file with the File System module,  use the fs.unlink() method.

fs.unlink('mynewfile2.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});