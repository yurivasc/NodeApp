## # Create server without express

```javascript
var http = require('http');

http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end(); 
}).listen(8080);
```



## # Create server with express

```javascript
var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send('hello world'); 
});

app.listen(3000, () => {
    console.log('listening on 3000')
});
```



## # Import modules (ES6)

```javascript	
//Before es6
const fs = require('fs'); //node module
const myModule = require('./myfolder/mymodule'); //my module

//ES6:  *file must be saved as .mjs 
//node --experimental-modules server.mjs

import books from './books'
```



## # Export modules

```javascript
//METHOD 1

module.exports = () => console.log('fn1')

//METHOD 2

const fn = () => console.log('fn')
module.exports = fn;


//you can then require method 1 and method 2 like that: 
const importedFn = require('./fn');
importedFn();


//Method 3 
const fn = () => console.log('ok');
const fn2 = () => console.log('ok2')

module.exports = { 
    fn,
    fn2
}

//you can then require
const objFn = require('./fn')
objFn.fn();
objFn.fun2();
```



## # Debug with Chrome

- go to:  chrome://inspect/#devices
- Open dedicated DevTools for Node
-  go to connection tab, and Add Connection: ex.: localhost:3000
- run the server using inspect flag:  node --inspect server.js
- set a breakpoint.



## # Debug with Visual Studio Code

On the debug window, click on Add Configuration, you can select NodeJs: Launch for example.

> launch.json

```javascript
{
    "version": "0.1.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}\\server.js"
        }
    ]
}
```



## # Routes with Express.Router();



> server.js

```javascript
const express = require('express')
const app = express();

const bookRoutes = require('./bookroutes');

app.use('/book', bookRoutes);

app.listen(3000);
```



> bookroutes.js

```javascript
const express = require('express')
const router = express.Router();
const bookController = require('./bookController');

router.get('/', (req,res) => {
  res.send('book ok')
})

router.get('/index', bookController.index)
router.get('/getBooks', bookController.getBooks)


module.exports = router;
```



> bookController.js

```javascript
const index = (req,res) => {
  res.send('index ok')
}

const getBooks = (req,res) => {
  res.send('get books ok ')
}

module.exports = {getBooks, index}
```



## # Middlewares

```javascript
const customMidleware =  (req,res,next) => {
   //do some operation..
   next();
}
```

> using:

```javascript
app.get('/', customMidleware, (req,res) => {
    //..
})
```

> using for all routes

```javascript
app.use(customMidleware)
```



## # CORS - Middleware

```javascript
app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next(); 
});
```



## # Static Files - Middleware Express 

```javascript
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.join(publicPath, "hi.txt"));
})
```



## # Body Parser - Middleware Express 

explanation:

is used to parse the chunks of data received to the req.body 

```javascript
const bodyParser = require('body-parser')

//if you comment this line, will see that req.body will have nothing.
app.use(bodyParser.urlencoded({ extended: false })); 


app.post('/bp', (req, res) => {
  console.log('body is ', req.body)
  res.send('ok')
});
```



## # Cookies Middleware

Explanation:

parses the cookies to the req.cookies object

```javascript
var cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get('/', () => {
    console.log(req.cookies)
})
```



## # Set Cookies

```javascript
app.get('/', (req, res) => {
    res.cookie('cookiename', 'cookievalue', { maxAge: 900000, httpOnly: true });
    res.send('ok');
});

```



## # View Engines (Handle bars)

> server.js

```javascript
app.set("view engine", "hbs");


app.get("/", (req, res) => {
  res.render("form.hbs", {name:"yourname"});
});

```

> forms.hbs

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{name}}</title>
</head>
<body>
    {{name}}
</html>
```



## # PATH (Built-in library)

```javascript
const path = require('path');

const mypath = path.join("c:", "abc");

path.parse('c:\projects');
/*
{ root: 'c:',
  dir: 'c:',
  base: 'projects',
  ext: '',
  name: 'projects' }
*/
```



## # OS (Built-in library)

```javascript
const os = require('os');

console.log(os.hostname(), os.freemem, os.homedir);

```



## # FS (Built-in library)

```javascript
const fs = require('fs'); //https://nodejs.org/api/fs.html

fs.exists(`c:`, (exists) => {
    console.log(exists); //true
})


const file = path.join(__dirname, 'abc.txt')
console.log(file);

fs.readFile(file, (err, data) => {
    console.log(data.toString());
});

fs.readFile(file, {encoding: 'utf-8'}, (err, data) => console.log(data));

fs.writeFile(file, 'abc', (err) => console.log(err));
fs.writeFileSync(file, 'another');

fs.appendFile(file, 'ok', (err) => {});

```

{table of more used methods}

## # HTTP (Built-in library)

```javascript
const http = require('http');

http.request('http://localhost://3000')
```



## # Events  (Built-in library)

explanation:

```javascript
const express = require('express');
const app = express();
const EventEmitter = require('events'); //https://nodejs.org/api/events.html
const emmiter = new EventEmitter();

emmiter.on('ok', (args) => {console.log('ok was emitted', args)})
// output ok was emitted { name: 'yuri' }

emmiter.emit('ok', {name:"yuri"})

app.listen(3000)
```



## # QUERYSTRING (Built-In library)

```javascript
var querystring = require("querystring");
var q = querystring.parse("year=2017&month=february");

console.log(q.year); //output: 2017
```



## #UTIL (Built-in library)

```javascript
const util =  require('util');

console.log(util.isArray())
```



