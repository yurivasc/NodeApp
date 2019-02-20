##  # NODE 



![node2](public/node2.png)

## Create server without express

```javascript
var http = require('http');

http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end(); 
}).listen(8080);
```



## Create server with express
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



## Global Modules

- [`__dirname`](https://nodejs.org/api/modules.html#modules_dirname)
- [`__filename`](https://nodejs.org/api/modules.html#modules_filename)
- [`exports`](https://nodejs.org/api/modules.html#modules_exports)
- [`module`](https://nodejs.org/api/modules.html#modules_module)
- [`require()`](https://nodejs.org/api/modules.html#modules_require_id)



## Import modules (ES6)

```javascript	
//Before es6
const fs = require('fs'); //node module
const myModule = require('./myfolder/mymodule'); //my module

//ES6:  *file must be saved as .mjs 
//node --experimental-modules server.mjs

import books from './books'
import books, {users, another} from './books'
```

<details>
<summary>Explanation</summary>

```txt
require(X) from module at path Y
1. If X is a core module,
   a. return the core module
   b. STOP
2. If X begins with '/'
   a. set Y to be the filesystem root
3. If X begins with './' or '/' or '../'
   a. LOAD_AS_FILE(Y + X)
   b. LOAD_AS_DIRECTORY(Y + X)
4. LOAD_NODE_MODULES(X, dirname(Y))
5. THROW "not found"

LOAD_AS_FILE(X)
1. If X is a file, load X as JavaScript text.  STOP
2. If X.js is a file, load X.js as JavaScript text.  STOP
3. If X.json is a file, parse X.json to a JavaScript Object.  STOP
4. If X.node is a file, load X.node as binary addon.  STOP

LOAD_INDEX(X)
1. If X/index.js is a file, load X/index.js as JavaScript text.  STOP
2. If X/index.json is a file, parse X/index.json to a JavaScript object. STOP
3. If X/index.node is a file, load X/index.node as binary addon.  STOP

LOAD_AS_DIRECTORY(X)
1. If X/package.json is a file,
   a. Parse X/package.json, and look for "main" field.
   b. let M = X + (json main field)
   c. LOAD_AS_FILE(M)
   d. LOAD_INDEX(M)
2. LOAD_INDEX(X)

LOAD_NODE_MODULES(X, START)
1. let DIRS = NODE_MODULES_PATHS(START)
2. for each DIR in DIRS:
   a. LOAD_AS_FILE(DIR/X)
   b. LOAD_AS_DIRECTORY(DIR/X)

NODE_MODULES_PATHS(START)
1. let PARTS = path split(START)
2. let I = count of PARTS - 1
3. let DIRS = [GLOBAL_FOLDERS]
4. while I >= 0,
   a. if PARTS[I] = "node_modules" CONTINUE
   b. DIR = path join(PARTS[0 .. I] + "node_modules")
   c. DIRS = DIRS + DIR
   d. let I = I - 1
5. return DIRS
```

</details>



## Export modules

```javascript
const fn = () => console.log('ok');
const fn2 = () => console.log('ok2')

module.exports = { 
    fn,
    fn2
}

//or 

module.exports = fn

//or

module.exports = () => console.log('fn1')
```



## Export modules ES6

```javascript
//-- 1: Name exports --

export const name = 'yuri'
export function add(x,y) => x+y

// -- you can import ..
import { name, add } from 'lib';
console.log(name); // yuri
console.log(add(4, 3)); // 7

//-- using * 
import * as lib from 'lib';
console.log(lib.add(1,2)); // 3



// 2: Default exports

//-- myfunc.js
export default  function() {console.log('hello')}

//- importing
import myFunc from './myfunc'



// 3: mixed default and normal 
export default const fn = () => console.log('fn')
export const fn2 = () => console.log('fn2')

//or
const fn = () => console.log('fn')
const fn2 = () => console.log('fn2')

export default fn, fn2


```



<details>
    <summary>References</summary>
    https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f
</details>







## Debug with Chrome

- go to:  chrome://inspect/#devices
- Open dedicated DevTools for Node
-  go to connection tab, and Add Connection: ex.: localhost:3000
- run the server using inspect flag:  node --inspect server.js
- set a breakpoint.



## Debug with Visual Studio Code

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



## Routes with Express.Router();



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



## Middleware

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



## CORS - Middleware

```javascript
app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next(); 
});
```



## CORS - Express

```javascript
npm install --save cors

var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

```

It will set all headers response to: 

```
Access-Control-Allow-Origin: *
```



### Restricting allowed hosts

```javascript
app.use(cors({
  origin: 'http://yourapp.com'
}));
```

list of allowed origins

```javascript
var allowedOrigins = ['http://localhost:3000',
                      'http://yourapp.com'];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error('Not Allowed'), false);
    }
    return callback(null, true);
  }
}));
```

### Sending custom headers

```javascript
app.use(cors({
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
}));
```



### HTTP Sessions Over CORS

HTTP Sessions rely on cookies, which are not sent by default over CORS.

To enable HTTP cookies over CORS, we need to follow two steps:



1. Set the `credentials` options to `true`.

```
app.use(cors({
  credentials: true,
}));
```



This will make the response include an additional [Access-Control-Allow-Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) header:

```javascript
Access-Control-Allow-Credentials: true
```



2. When making the AJAX request, make sure to set the [withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials) property to `true`.

```
axios.get('url', { withCredentials: true }) 
```



## Static Files - Middleware Express 

```javascript
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.join(publicPath, "hi.txt"));
})
```



## Body Parser - Middleware Express 

<details> 
    <summary>
    	explanation:
    </summary>
    <data>
    Is used to parse the chunks of data received to the req.body 
	</data>
</details>



```javascript
const bodyParser = require('body-parser')

//if you comment this line, will see that req.body will have nothing.
app.use(bodyParser.urlencoded({ extended: false })); 


app.post('/bp', (req, res) => {
  console.log('body is ', req.body)
  res.send('ok')
});
```



## Session - Middleware Express

```javascript
app.use(session({ secret: "cats" }));
```


<details>
<summary>Explanation</summary>
State management: 
Sessions are used to retrieve and keep data from a user, using cookies.

- Stores data in the server side.
- Session ids are created for each session and is stored in cookies
- It only stores an id in the client. 

</details>


```javascript
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
var session = require('express-session');


app.use(bodyParser.urlencoded({extended :false}));

app.use(session({
    secret: 'cookie_secret',
    name: 'id',
    // store: 'sessionStore', // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req,res) => {
    res.send(`
        <h1>ok</h1>
        <form method="post" action="http://localhost:3000/setSessionValues">
            <input type="text" name="user"/>
            <button type="submit">Send.. </button>
        </form>
    `)
})

app.post('/setSessionValues', (req, res) => {
    var sess;
    sess = req.session;
    sess.email = req.body.user;
    sess.username = 'yuri vasconcelos 2';
    console.log('sess = ', sess);
    res.send(`
        <h1> verify values </h1>

        <form method="get" action="http://localhost:3000/getSessionValues">
        <button type="submit">Verify</button>
        </form>
    `)
});

app.get('/getSessionValues', (req,res) => {
    console.log(req.session);
    res.send(req.session);
});

app.listen(3000, () => { console.log('listening on 3000') })
```







## Cookies Middleware

Explanation:

parses the cookies to the req.cookies object

```javascript
var cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get('/', () => {
    console.log(req.cookies)
})
```



## Set Cookies

```javascript
app.get('/', (req, res) => {
    res.cookie('cookiename', 'cookievalue', { maxAge: 900000, httpOnly: true });
    res.send('ok');
});

```



## View Engines (Handle bars)

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



## process.env

```javascript
console.log(process.env);
```

​	

## path (Built-in library)

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



## os (Built-in library)

```javascript
const os = require('os');

console.log(os.hostname(), os.freemem, os.homedir);

```



## fs (Built-in library)

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



## http (Built-in library)

```javascript
const http = require('http');

http.request('http://localhost://3000')
```



## events (Built-in library)

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



## querystring (Built-In library)

```javascript
var querystring = require("querystring");
var q = querystring.parse("year=2017&month=february");

console.log(q.year); //output: 2017
```



## util (Built-in library)

```javascript
const util =  require('util');
console.log(util.isArray([1,2,3]))
```



## jasonwebtoken (external library)

```javascript
var jwt = require("jsonwebtoken");

var token = jwt.sign({ foo: "bar" }, 'secret', (err, res) => {
    console.log(res);

    const isVerified = jwt.verify(res, 'secret', (err, res) => {
        console.log(err, res);
    })
});

jwt.decode("eyJhbGciOiJIUzI1NiJ9.dGV4dG8gYSBzZXIgZW5jcmlwdGFkbw.yvo5XgXq09SNq4_Wj1XA_41_aCaMfmAmFbEuIGimekM");

```



## sha256 (external library)

```javascript
const sha = require('sha256');
console.log(sha('hello world', true));
//b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9

```



## crypto-js (external library)

```javascript
const {SHA256} = require('crypto-js');

var message = "testando";

const hash = SHA256(message + "salt").toString();
console.log(hash);
//52c8b8639cc50a0a4906de72d685f23872178d5e33396a1520c6f4179a8511ae
```





##  Socket IO 

> server.js

```javascript
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/socketIO.html");
});

io.on("connection", socket => {
  console.log("someone connected to socket io");

  //simple emit
  socket.emit("simpleEvent", () => {
    console.log("myCustomEvent backend.");
  });

  //emit with data
  socket.emit("myCustomEvent", { data: "testing data" }, () => {
    console.log("myCustomEvent backend.");
  });

  socket.on("emitfromclient", data => {
    console.log(data);
  });
});

io.on("disconnect", () => {
  console.log("someone disconnected to socket io");
});

http.listen(3000, () => {
  console.log("3000");
});

```

> socketIO.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Socket IO</title>
  </head>
  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.dev.js"></script>

    <script>
      var socket = io();
      socket.on("connect", () => {
        console.log("connected to server");
      });

      socket.on("disconnect", () => {
        console.log("disconnected from server");
      });

      socket.on("myCustomEvent", data => {
        console.log("custom event disparado");
        console.log(JSON.stringify(data));
      });

      function emitEvent() {
        socket.emit("emitfromclient", "{'name': 'yuri', 'age': '30'}");
        console.log("sent");
      }
    </script>
    <h1>Socket IO</h1>
    <button id="send" onclick="emitEvent()">send message..</button>
  </body>
</html>

```
