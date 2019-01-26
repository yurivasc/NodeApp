/*

slice(start:number, end:number)


splice(start: number, deleteCount: nubmer, object: array or single item)

splice vs slice:
splice changes the original array whereas slice() doesn't.


*/

var arr = [1,2,3];

var arr2 = arr.slice(); //create a new array

console.log(arr, arr2);  // output: [ 1, 2, 3 ] [ 1, 2, 3 ]


var arr3 = arr.slice(1,2);

console.log(arr, arr3); // output: [ 1, 2, 3 ] [ 2 ]  the original array remais the same here. 

