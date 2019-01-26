/*

map(x=> (expresstion))
[1,2,3].map(x=> x * 10); returns 10,20,30


map()     —  creates a new array with the results of calling a provided function on every element in the calling array.
forEach() — executes a provided function once for each array element. //doesn't return an array

map x filter

The filter method doesn't do the same as the map method.
The map method is used to convert each item of an array,
while the filter method is used to select certain items of an array.


*/

var arr = [1,2,3]

var arrdouble = arr.map(x=>x*2);


console.log(arr);           //output: [1,2,3]
console.log(arrdouble);     //output: [2,4,6]


