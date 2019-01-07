//https://www.npmjs.com/package/node-fetch#motivation

const fetch = require("node-fetch");

fetch("https://yurifirstapp.herokuapp.com/json")
  .then(res => res.json())
  .then(body => console.log(body))



// fetch('https://httpbin.org/post', {
//         method: 'post',
//         body:    JSON.stringify(body),
//         headers: { 'Content-Type': 'application/json' },
//     })
//     .then(res => res.json())
//     .then(json => console.log(json));