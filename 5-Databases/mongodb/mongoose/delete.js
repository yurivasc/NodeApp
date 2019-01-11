const {mongoose}  = require('../../../server/db/mongoose');

const {User} = require('../../../server/models/User');

const id = "5c1e04ffeb27fe18cc5e9f12"
// User.deleteOne({_id: "5c1e04ffeb27fe18cc5e9f12"}).then(res => {
//     console.log(res);
// }).catch(e => {
//     console.log(e);
// })


User.findOneAndRemove({nome:"abc123"}).then(res => {
    console.log(res);
}).catch(e => console.log(e));