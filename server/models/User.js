var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    idade:{
        type: Number
    },
    ativo:{
        type: Boolean,
        default: false
    },
    tokens:[{
        access: {
            type: String
        },
        token: {
            type: String,
            default: "none"
        }
    }]
});


schema.methods.customMethod = () => {
    return 'custom method actioned';
}

schema.statics.customStaticCustomMethod = () => {
    return 'custom method actioned';
}



var User = mongoose.model('user', schema);

module.exports = {
    User
}
