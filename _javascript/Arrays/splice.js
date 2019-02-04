/*

splice(start: number, deleteCount: nubmer, object: array or single item) 

slice(start:number, end:number)

splice vs slice:

splice changes the original array whereas slice() doesn't.

https://cdn-images-1.medium.com/max/800/1*M61AUDeeywWsdfDFP4yJHg.png

*/


var  arr = [1,2,3];  slice()

// var result = arr.splice(0, 1); 
// console.log(arr, result); // output: [2,3]  and  [1]


// var result = arr.splice(1, 1); console.log(arr, result); //output: [1, 3][2]

// var result = arr.splice(1, 3); console.log('//output: remaining:', arr, 'taken:', result); //output: [1] [2,3] 

// var result = arr.splice(1, 1, 'hello'); console.log('//output: remaining:', arr, 'taken:', result); //remaining: [ 1, 'hello', 3 ] taken: [ 2 ]

// var result = arr.splice(1, 0, ...['a', 'b']); console.log('// output: remaining:', arr, 'taken:', result); //remaining: [1, 'a', 'b', 2, 3] taken: []

var result = arr.splice(1, 0, ...['a', 'b']); console.log('// output: remaining:', arr, 'taken:', result); //remaining: [1, 'a', 'b', 2, 3] taken: []


