console.log('starting app');

const fs = require('fs');


//Writing to a file
fs.appendFile('abc.txt', 'first line \n ', () => {});





//reading from a file
//
//fs.readFile will return a buffer in the data argument.
//we then have 2 ways to convert. by using convert.tostring or using the utf8 argument


// //reading from a file
var file = fs.readFile('abc.txt',  (err, data) => {
    if (err) console.log(err)
    console.log(data.toString());
});




 var file = fs.readFile('abc.txt', 'utf8', (err, data) => {
     if (err) console.log(err)
     console.log(data);
 });



// fs.readFile('abc.txt',  (err, data) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     res.end();
// });


// fs.appendFile()
// fs.open()
// fs.writeFile()

// //To delete a file with the File System module,  use the fs.unlink() method.

// fs.unlink('mynewfile2.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted!');
// });