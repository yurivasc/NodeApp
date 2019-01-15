// ** EXPERIMENTAL DONT USE **//

//The flat method is not yet implemented in common browsers(only Chrome v69, Firefox Nightly and Opera 56).
//It’s an experimental feature.Therefore you cannot use it yet.

//A new array with the sub-array elements concatenated into it.

//TypeError: arr1.flat is not a function

var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
