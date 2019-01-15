//The in operator returns true if the specified property is in the specified object or its prototype chain.

var car = { make: "Honda", model: "Accord", year: 1998 };

console.log("make" in car);
// expected output: true

delete car.make;
if ("make" in car === false) {
    car.make = "Suzuki";
}

console.log(car.make);
// expected output: "Suzuki"




var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees        // returns true
3 in trees        // returns true
6 in trees        // returns false
'bay' in trees    // returns false (you must specify the index number, not the value at that index)
'length' in trees // returns true (length is an Array property)
Symbol.iterator in trees // returns true (arrays are iterable, works only in ES2015+)




// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar  // returns true
'model' in mycar // returns true