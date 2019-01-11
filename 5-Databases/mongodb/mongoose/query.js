const { mongoose } = require("../../../server/db/mongoose");

const { User } = require("../../../server/models/User");


const {ObjectID} = require('mongodb')


User.find({nome: "abc123"}).then((res) => {
    console.log(res);
})
 
User.findOne({}).then((res) =>{
    console.log(res);
});

User.findById('5c1e05593767171c10beadb6').then((res) => {
    console.log(res);
}).catch(e => {
    console.log("Error.." + e);
})