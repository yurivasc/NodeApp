ERROR-First Callback

callback takes an error object as their first parameter

example: see the err..
 var file = fs.readFile('abc.txt', (err, data) => {
     if (err) console.log(err)
     console.log(data);
 });