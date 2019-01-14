var mongoose = require('mongoose');

//mongoose.model (name of model, schema, name of collection - carefully because it is case sensitive)
var SimpleModel = mongoose.model("simpleModel", { name: String }, "simpleModel");


module.exports = {
    SimpleModel
}

