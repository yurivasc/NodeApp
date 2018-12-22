var mongoose = require('mongoose');
console.log('required mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/db");

module.exports ={
    mongoose  
} 