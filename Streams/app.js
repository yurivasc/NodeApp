//https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3611488?start=0
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk);
	writable.write(chunk);
});