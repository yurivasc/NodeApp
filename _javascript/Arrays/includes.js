//The includes() method determines whether 
//an array includes a certain value among its entries,
// returning true or false as appropriate.

[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

//includes(arrayToFind, indexToStartLooking);