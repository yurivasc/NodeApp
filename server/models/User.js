var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

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

schema.methods.generateToken = () => {
    // const user = this;
    var token = jwt.sign({_id: User._id},"secret");
    console.log('user token:', token)
}

schema.statics.findbyToken = (token) => {
    console.log('find by token actioned')

    var decoded = jwt.decode(token, "secret", (err, res) => {
        if (err) console.log(err)
        else console.log(res);
    })

    User.findOne({
         _id: decoded._id,
        'tokens.token': token
    }).then(res => {
        console.log(res);
    });

    // console.log(userFound);
    
}


var User = mongoose.model('user', schema);

module.exports = {
    User
}
