var mongoose = require('mongoose');

var User = mongoose.model('User', {
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
    }
});

module.exports = {
    User
}
