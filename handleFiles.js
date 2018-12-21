console.log('starting app');

const fs = require('fs');


//Writing to a file
fs.appendFile('greetings.txt', '/n another', () => {});
console.log('created / updated the greetings.txt')


//reading from a file
var file = fs.readFile('greetings.txt', () => {});
console.log(file);

