const express = require('express');
const bodyParser = require('body-parser')

var session = require('express-session');
const app = express();

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