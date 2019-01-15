//The every() method tests whether all elements in the array pass the test implemented by the provided function.

const a  = [ 1,2,3];

var result = a.every(x => x > 0); //true
var result = a.every(x=> x > 2); //false
