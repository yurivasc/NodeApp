/*

map()     —  creates a new array with the results of calling a provided function on every element in the calling array.
forEach() — executes a provided function once for each array element. //doesnt return an array

map x filter

The filter method doesn't do the same as the map method.
The map method is used to convert each item of an array,
while the filter method is used to select certain items of an array.


*/

var arr = [1, 2, 3]

var arrdouble = arr.forEach(x => x * 2);


console.log(arr);               //output (1,2,3)
console.log(arrdouble);         //output undefined


