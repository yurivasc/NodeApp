function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
var auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true










var simpleStr = 'This is a simple string';
var myString = new String();
var newStr = new String('String created with constructor');
var myDate = new Date();
var myObj = {};
var myNonObj = Object.create(null);

simpleStr instanceof String; // returns false, checks the prototype chain, finds undefined
myString instanceof String; // returns true
newStr instanceof String; // returns true
myString instanceof Object; // returns true

myObj instanceof Object;    // returns true, despite an undefined prototype
({}) instanceof Object;    // returns true, same case as above
myNonObj instanceof Object;    // returns false, a way to create an object that is not an instance of Object

myString instanceof Date;   // returns false

myDate instanceof Date;     // returns true
myDate instanceof Object;   // returns true
myDate instanceof String;   // returns false