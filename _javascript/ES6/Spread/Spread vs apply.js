//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

//Spread in function

function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction.apply(null, args);
//With spread syntax the above can be written as:

function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
//Any argument in the argument list can use spread syntax and it can be used multiple times.

function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);