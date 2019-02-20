const express = require('express');
const app = express();
var session = require('express-session');

var passport = require('passport');
var googleStrategy = require('passport-google-oauth').OAuth2Strategy;


var session = require("express-session"),
    bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new googleStrategy({
    clientID: "",
    clientSecret: "",
    callbackURL: 'http://localhost:3000/callback'
}, (accessToken, refreshToken, profile, done) => {

    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);

    done(null, profile);
}
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});


app.get('/auth',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/callback',
    passport.authenticate('google', {
        successRedirect: '/autenticado',
        failureRedirect: '/',
        session: true //default
    }));

app.get('/', (req, res) => {
    res.send('home');
})


app.get('/autenticado', (req, res) => {
    res.send('autenticado');
})

app.get('/login', (req, res) => {
    res.send('failed');
})

app.listen(3000, () => {
    console.log('listening on 3000')
})