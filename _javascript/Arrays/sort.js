//The sort() method sorts the elements of an array in place and returns the array.
//The default sort order is built upon converting the elements into strings, 
//then comparing their sequences of UTF - 16 code units values.

//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

https: var months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21];
array1.sort();
console.log(array1);
// expected output: Array [1, 21, 30, 4]
