const myV = require('./v'); //variable
const myC = require('./c');

const myF = require('./f');
const myF2 = require('./f2');

const myJ = require('./json');

console.log(myV.simpleVariable);

console.log(myC);

const mci = new myC.myClass();

console.log(mci);

myF.someFunc();
myF2();


console.log(myJ);
