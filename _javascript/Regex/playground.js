var str = "abc 123";
var array = [1,2,3]; //doest work with regex



console.log(str.match(/abc/));  //[ 'abc', index: 0, input: 'abc 123', groups: undefined ]
console.log(str.match(/abc/g)); // [ 'abc' ]

console.log(array.match(/1/g)); //array.match is not a function --
