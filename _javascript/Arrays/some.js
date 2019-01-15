//The some() method tests whether at least one element in the array passes the test implemented by the provided function.


var array = [1, 2, 3, 4, 5];

console.log(array.some(x => x == 1)); //true

console.log(array.some(x => x == 8)); //false


//some() executes the callback function once for each element present in the array until it finds one where callback returns a truthy value(a value that becomes true when converted to a Boolean).If such an element is found, some() immediately returns true. 