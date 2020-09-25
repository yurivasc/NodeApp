##  # NODE 

<br>

![node2](public/node2.png)

## Create server without express

```javascript
var http = require('http');

http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end(); 
}).listen(8080);
```
<br>


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

```
var app = require('express')();

app.get('/', (req, res) => {
    res.send('hey');
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
});
```

<br>


## Global Objects

- [`__dirname`](https://nodejs.org/api/modules.html#modules_dirname)
- [`__filename`](https://nodejs.org/api/modules.html#modules_filename)
- [`exports`](https://nodejs.org/api/modules.html#modules_exports)
- [`module`](https://nodejs.org/api/modules.html#modules_module)
- [`require()`](https://nodejs.org/api/modules.html#modules_require_id)

In browsers, the top-level scope is the global scope.
That means that in browsers if you're in the global scope var something will define a global variable.

In Node this is different. The top-level scope is not the global scope; var something inside a Node module will be local to that module.



| Object   | Description                                                  |
| -------- | ------------------------------------------------------------ |
| filename | The filename of the code being executed. (absolute path)     |
| dirname  | The name of the directory that the currently executing script resides in. (absolute path) |
| module   | A reference to the current module. In particular module.exports is used for defining what a module exports and makes available through require(). |
| exports  | A reference to the module.exports that is shorter to type.   |
| process  | he process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter. |
| Buffer   | The Buffer class is a global type for dealing with binary data directly. |

<br>


## Module Wrapper Function

every file in nodejs is wrapped by a function:

at runtime our code will be converted and wrapped such as above.

example:

```javascript
(function (exports, require, module, __filename, __dirname)){
  //your code here, example:
  const express = require('express')
  const app = express()
  app.listen(3000)
});
```



<br>



## Import modules

```javascript	
const fs = require('fs'); 
const myModule = require('./myfolder/mymodule');

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

<br>

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

<br>

## Export modules ES6

```javascript
//------ exporting ------
const books = () =>  console.log('books');
const other = () => console.log('other')
const dft = () => console.log('i am defualt')

export {books, other, dft as default};

//or
// export {books, other};
// export default dft; 



//------ importing ------

import dft, {books, other} from './books'
console.log(books, other, dft);

```

<br>

<details>
    <summary>References</summary>
    https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f
</details>

<br>

## Debug with Chrome

- go to:  chrome://inspect/#devices
- Open dedicated DevTools for Node
-  go to connection tab, and Add Connection: ex.: localhost:3000
- run the server using inspect flag:  node --inspect server.js
- set a breakpoint.

<br>

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

<br>

## Debug library

for example, some times we put a lot of console.log in our code
just to check a certain information. but then, we remove to production,
later, we need to do it again and write all console.log again.

So to avoid this, we can use the debug library, which will only execute when we are in dev. Therefore, we don't need to keep commenting and uncommenting all logs. 

yarn add debug

```javascript
//yarn add update
//set DEBUG=app:startup

const express = require('express');
const app = express();
const debug = require('debug')('app:startup')

app.get('/', (req, res) => { 
    debug('test');
    res.send('ok')
    
});


app.listen(3000, () => { console.log('http://localhost:3000' )})

```
So, it will only console log when the environment variable DEBUG is equal to app:startup. 
I could create more debus, example:
```javascript
const debugDB = require('debug')('app:db');
```

and then only debug where I need.



<br>

## Responses



> simple response

```javascript	
res.send('ok') 
```


<br>


> simple response using html

```javascript
res.send(`
	<h1>hi</h1>
	<form method="post" action="/dosomething">
	<input type="text" value="name"/>
	<input type="submit" value="send"/>
`)
```


<br>


> status

```javascript
app.get('/status', (req, res) => { 
    res.status(404).send('nok');
});
```

<br>

<details>
    <summary> List of status</summary>

​    

| STATUS | DESCRIPTION                   |
| :----: | :---------------------------- |
|  200   | OK                            |
|  201   | Created                       |
|  202   | Accepted                      |
|  203   | Non-Authoritative Information |
|  204   | No content                    |
|  205   | Reset Content                 |
|  301   | Moved Permantently            |
|  302   | Found                         |
|  303   | Other                         |
|  304   | Not modified                  |
|  305   | Use Proxy                     |
|  306   | Switch Proxy                  |
|  307   | Temporary Redirect            |
|  308   | Permanent Redirect            |
|  400   | Bad Request                   |
|  401   | Unauthorized                  |
|  402   | Payment Required              |
|  403   | Forbidden                     |
|  404   | Not Found                     |
|  405   | Method not allowed            |
|  406   | Not acceptable                |
|  407   | Proxy Authentication Required |
|  408   | Request timeout               |
|  409   | Conflict                      |
|  410   | Gone                          |
|  500   | Internal Server Error         |
|  501   | Not implemented               |
|  502   | Bad Gateway                   |
|  503   | Service Unavailable           |
|  504   | Gateway timeout               |
|  505   | HTTP Version not supported    |
|  507   | Insufficient Storage          |

</details>


<br><br>


> json



 This method sends a response (with the correct content-type) and the parameter converted to a JSON string using [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).



```javascript
res.json({ name: 'yuri' });
```


<br>


> sendFile 

```javascript
app.get('/file', (req, res) => {
    res.sendFile(image); //will open the file/anything in the brownser
});
```

<br>


> download / attachment 

<details>
    <summary>Differences</summary>
    - The res.attachment "Sets the HTTP response Content-Disposition header field to “attachment”."

 - This essentially says, 'Hey, this file should be viewed as an attachment, not a webpage.'

 - Whereas the res.download "Transfers the file at path as an “attachment”. Typically, browsers will prompt the user for download."
    </details>

  

```javascript
app.get('/download', (req, res) => {
    res.attachment(image); //will download the file
    res.send('ok');
})

app.get('/download2', (req,res) => {
    res.download(image); //will download the file
});

//The key is to set the response header to a 'Content-disposition', 'attachment; filename=theDocument.txt'
app.get('/download3', (req,res) => {
    res.setHeader('Content-disposition', 'attachment; filename=my image.png');
    res.setHeader('Content-type', 'text/plain');
    res.sendFile(image);
})

```

<br>

> render  (used with template engines)

```javascript
//needs to define a engine
app.set('view engine', 'hbs')

app.get('/render', (req, res) => { 
    
    console.log('route ok') 
    res.render("form.hbs", {name: "yuri"});
});

```

<br>

> Cookies

```javascript
res.cookie('c', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
```

When using [cookie-parser](https://www.npmjs.com/package/cookie-parser) middleware, this method also supports signed cookies. Simply include the `signed` option set to `true`. Then `res.cookie()` will use the secret passed to `cookieParser(secret)` to sign the value.

```javascript
res.cookie('name', 'yuri', { signed: true });
```

<br>

> Clear Cookies

```javascript
res.clearCookie('name');
```

<br>


## Routes with Express.Router();



> server.js

```javascript
const express = require('express')
const app = express();

const bookRoutes = require('./bookroutes');

app.use('/book', bookRoutes);

app.listen(3000);
```

<br>

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

<br>

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

<br>



## Middleware


https://expressjs.com/en/resources/middleware.html


```javascript
const customMidleware =  (req,res,next) => {
   //do some operation..
   next();
}
```

<br>

> using:

```javascript
app.get('/', customMidleware, (req,res) => {
    //..
})
```

<br>

> using for all routes

```javascript
app.use(customMidleware)
```


<br>


## CORS - Middleware

```javascript
app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next(); 
});
```


<br>


## CORS - Express

```javascript
npm install --save cors

var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

```

<br>


> It will set all headers response to: 

```
Access-Control-Allow-Origin: *
```

<br>

> Restricting allowed hosts

```javascript
app.use(cors({
  origin: 'http://yourapp.com'
}));
```

<br>

> list of allowed origins

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

<br>

> Sending custom headers

```javascript
app.use(cors({
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
}));
```

<br>


####  HTTP Sessions Over CORS

<br>

HTTP Sessions rely on cookies, which are not sent by default over CORS.

To enable HTTP cookies over CORS, we need to follow two steps:

<br>

> 1. Set the `credentials` options to `true`.

<br>

```
app.use(cors({
  credentials: true,
}));
```

<br>

<details>
<summary>Explanation</summary>

This will make the response include an additional [Access-Control-Allow-Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) header:

```javascript
Access-Control-Allow-Credentials: true
```

<br>


2. When making the AJAX request, make sure to set the [withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials) property to `true`.

```
axios.get('url', { withCredentials: true }) 
```

<br>


</details>


## Static Files - Middleware Express 

```javascript
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.join(publicPath, "hi.txt"));
})
```

<br>

## express.json and express.urlencoded - Middleware Express

both are used to parse form/requests data to the req.body
form-data or x-www-form-urlenconded forms. 

You can alternatively use the body-parser package (but not needed).

<details><summary>Explanation</summary>

https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded

When talking about express.json() and express.urlencoded() think specifically about POST requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object)

You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.

a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

ALTERNATIVELY, I recommend using body-parser (it is an NPM package) to do the same thing. It is developed by the same peeps who built express and is designed to work with express. body-parser used to be part of express. Think of body-parser specifically for POST Requests (i.e. the .post request object) and/or PUT Requests (i.e. the .put request object).

In body-parser you can do

// calling body-parser to handle the Request Object from POST requests
var bodyParser = require('body-parser');
// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: true }));

</details>



```javascript
  
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/form', (req,res)=>{
    res.send(`
        <form method='post' action='/'>
            <input type='text' name='user' />
            <input type="submit" value='send'/>
        </form>
    `)
})

app.post('/', (req,res) => {
    console.log(req.body) //{ user: '123' }
    res.send('thanks');
})

```

//we don't need to use body-parser.





## Body Parser - Middleware Express 

<details> 
    <summary>
    	explanation:
    </summary>
    <data>
    Is used to parse the chunks of data received to the req.body 

    Earlier versions of Express used to have a lot of middleware bundled with it. bodyParser was one of the middlewares that came it. When Express 4.0 was released they decided to remove the bundled middleware from Express and make them separate packages instead. The syntax then changed from app.use(express.json()) to app.use(bodyParser.json()) after installing the bodyParser module.

    bodyParser was added back to Express in release 4.16.0, because people wanted it bundled with Express like before. That means you don't have to use bodyParser.json() anymore if you are on the latest release. You can use express.json() instead.

    The release history is for 4.16.0 is here for those who are interested, and the pull request here.


	</data>
</details>

<br>

```javascript
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
//comment line above req.body will be empty

app.get('/', (req,res) => {
  res.send(`
    <h1> BP </h1>
    <form method="post" action="/bp">
      <input type="text" name="user"/>
      <input type="submit" value="send">
    </form>
  `)
})

app.post('/bp', (req, res) => {
  console.log('body is ', req.body)
  res.send('the user is:' + req.body.user)
});

app.listen(3000, () => {
  console.log('listening on 3000')
})
```

<br>

## Session - Middleware Express

```javascript
app.use(session({ secret: "cats" }));
```

<br>

<details>
<summary>Explanation</summary>
State management: 
Sessions are used to retrieve and keep data from a user, using cookies.

- Stores data in the server side.
- Session ids are created for each session and is stored in cookies
- It only stores an id in the client. 

</details>

<br>

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


<br>


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



<br>


## helmet (external middleware / to protect your server)

```javascript
const express = require('express')
const helmet = require('helmet')

const app = express()

app.use(helmet())
```


<br>


## morgan (external middleware to log requests)

```javascript
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')
var morgan = require('morgan')

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))


app.get('/', (req, res) => { 
    res.send('ok')
});


app.listen(3000, () => { console.log('http://localhost:3000' )})
```

<br>


## View Engines (Handle bars)

> server.js

```javascript
app.set("view engine", "hbs");


app.get("/", (req, res) => {
  res.render("form.hbs", {name:"yourname"});
});

```

<br>

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

<br>


## process.env.NODE_ENV or app.get('env')

```javascript
console.log(process.env);
```

Another way to get the environment:

```javascript
app.get('env') //outputs by default "development"

console.log(process.env.NODE_ENV); //returns undefined because we didn't se this environment variable.

```

<br>

to set a environment variable in node/windows use:

set name=yuri

getting
set name

getting all
set


<br>


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


<br>


## os (Built-in library)

```javascript
const os = require('os');

console.log(os.hostname(), os.freemem, os.homedir);

```


<br>


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


<br>


## http (Built-in library)

```javascript
const http = require('http');

http.request('http://localhost://3000')
```


<br>


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


<br>


## querystring (Built-In library)

```javascript
var querystring = require("querystring");
var q = querystring.parse("year=2017&month=february");

console.log(q.year); //output: 2017
```


<br>


## util (Built-in library)

```javascript
const util =  require('util');
console.log(util.isArray([1,2,3]))
```


<br>


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


<br>


## joi (external library to validate user input)

```javascript
const schema = {
        name: Joi.string().min(1).required()
    }
   
    const result = Joi.validate({name: "oi"}, schema)
    .then(res =>  console.log('result', res))
    .catch(err => console.log('error', err));

    //output: { name: 'oi' } , because object {name:"oi"} matches the schema
    
    
    const result2 = Joi.validate({name: 1}, schema)
    .then(res =>  console.log('result', res))
    .catch(err => console.log('error', err));
    
    //throws an error because {name: 1} doesn't match the schema
    //output: 
    /*
      details:
            [ { message: '"name" must be a string',
                path: [Array],
                type: 'string.base',
                context: [Object] } ],
            _object: { name: 1 },
            annotate: [Function] }
    */

```

<br>


## winston (external library to log requests)

```javascript
const express = require('express');
const app = express();
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

app.get('/', (req, res) => {
    logger.info('Hello again distributed logs');
    logger.log("info", "test yuri")
    logger.error('test');
    res.send('ok')
});


app.listen(3000, () => { console.log('http://localhost:3000') })
```



<br>

## rc (external library - for configuration)

https://www.npmjs.com/package/rc

so basically you can create two files:
dev.json and prod.json and you can configure each differently.

Then, you can load one or the other based on the process.env.NODE_ENV

Example: configuration for development

```javascript
var configDev = require('rc')(appname, {
  //defaults go here.
  port: 2468,
 
  //defaults which are objects will be merged, not replaced
  views: {
    engine: 'jade'
  }
});
```

```javascript
if (process.env.NODE_ENV == "DEV"){
  require('rc')(appname, configDev);
}else{
  require('rc')(appname, configProd);
}
```


## sha256 (external library)

```javascript
const sha = require('sha256');
console.log(sha('hello world', true));
//b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9

```


<br>


## crypto-js (external library)

```javascript
const {SHA256} = require('crypto-js');

var message = "testando";

const hash = SHA256(message + "salt").toString();
console.log(hash);
//52c8b8639cc50a0a4906de72d685f23872178d5e33396a1520c6f4179a8511ae
```

<br>


##  Error handling




<br>




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


<br>



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
