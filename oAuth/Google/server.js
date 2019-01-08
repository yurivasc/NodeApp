const express = require('express');
const app = express();

var passport = require('passport');
var googleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.use(new googleStrategy({
    clientID: "887360357807-psngao92hqtif5sk5e1ovous8in3o9q6.apps.googleusercontent.com",
    clientSecret: "vyW7v_6wvfXrx7UqbZiKljZX",
    callbackURL: 'http://localhost:3000/callback'
}, (accessToken, refreshToken, profile, done) => {

    // console.log(accessToken);
    // console.log(refreshToken);
    // console.log(profile);

    done(null, profile);
}
));

app.get('/auth', passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/callback',
    passport.authenticate('google', {
        successRedirect: '/success',
        failureRedirect: '/failed',
        session: false
    }));

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/success', (req, res) => {
    res.send('autenticado');
    console.log('AUTENTICADO  ...');
})

app.get('/login', (req, res) => {
    res.send('failed');
})


app.listen(3000, () => {
    console.log('listening on 3000')
})