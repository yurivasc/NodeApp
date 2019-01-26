/*

From creates an array from a iterable object, for example, string:

Array.from(iterable: object) 

*/

console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

