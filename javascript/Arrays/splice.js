var arr = [1, 2, 3];

var arr2 = arr.splice(); //create new array with spliced elements

console.log(arr, arr2);   //output:  [ 1, 2, 3 ] []


var arr3 = arr.splice(1, 2); 

console.log(arr, arr3);   //output: [ 1 ] [ 2, 3 ]

