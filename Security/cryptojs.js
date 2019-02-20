const {SHA256} = require('crypto-js');
var message = "testando";
const hash = SHA256(message + "salt").toString();
console.log(hash);
//52c8b8639cc50a0a4906de72d685f23872178d5e33396a1520c6f4179a8511ae
