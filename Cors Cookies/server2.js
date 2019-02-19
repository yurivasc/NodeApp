const express = require('express')
const app = express();
const axios = require('axios')
const fetch = require('fetch')
axios.defaults.withCredentials = true;


app.get('/post', (req, res) => {

    console.log('/post will initialize request to 3000')
    axios.get("http://localhost:3000/", {
        method: "get",
        // withCredentials: true
    }).then(response => {
        console.log(response.status, response.headers)
        res.send("response from http://localhost:3000 ok");
    }).catch(error => {
        console.log(error);
        res.send('response from http://localhost:3000 nok')
    })

})

app.get('/postfetch', (req, res) => {
    fetch('http://localhost:3000/', {
        credentials: 'include'
    }).then(res => {
        console.log(response);
        res.send('ok')
    }).catch(err => console.log(err));

})

app.get('/another', (req, res) => {
    axios.get("http://localhost:3000/another", {
        method: "get",
        withCredentials: true
    }).then(response => {
        console.log(response.status, response.headers)
        res.send("response from another ok");
    }).catch(error => {
        console.log(error);
        res.send('response from another nok')
    })
})



app.listen(3001, () => {
    console.log('listening on', 'http://locahost:3001')
})