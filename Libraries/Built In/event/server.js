const express = require('express');
const app = express();
const EventEmitter = require('events'); //https://nodejs.org/api/fs.html
const emmiter = new EventEmitter();

emmiter.on('ok', (args) => {console.log('ok was emitted', args)})
// output ok was emitted { name: 'yuri' }


emmiter.emit('ok', {name:"yuri"})



app.listen(3000)