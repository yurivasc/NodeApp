const express = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser()) //if you comment this line (will see that res.cookie is undefined.)

//when using cookieParser, it will parse the req.header.cookie that is a string cookiename=abc;cookieb=ads
// to a object available in our req.cookies.




app.get('/', (req, res) => {
    console.log(req.headers);
    console.log('acionated /')
    res.cookie('A', 'yuri', { maxAge: 900000, httpOnly: true });
    res.cookie('B', 'vasconcelos', { maxAge: 900000, httpOnly: true });
    res.send(" / ok");
})

app.get('/another', (req, res) => {
    console.log('Cookies from parser: ', req.cookies) 
    console.log('Cookie from headers', req.headers.cookie);
    res.send("see logs");
})

//output:


// Cookies from parser:  { cookieName: 'yuri', abc: '1234', A: 'yuri', B: 'vasconcelos' }
// cookie from headers cookieName=yuri; abc=1234; A=yuri; B=vasconcelos


app.listen(3000, () => {
    console.log('listening on: http://locahost:3000')
})