console.log('SimpleUsers required');

var mongoose = require("mongoose");

var Schema = mongoose.Schema({
    name: "string",
    age: "number"
});

var SimpleUser = mongoose.model("simpleusers", Schema);

module.exports = {
    SimpleUser
};
