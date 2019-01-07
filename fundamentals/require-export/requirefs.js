var fs = require('fs'); //this is a lib from node - filesystem
var os = require('os');  //this is a lib from node - operation system

fs.appendFile('test.txt', "hi", () => {});
var test = os.userInfo();

console.log(test);
