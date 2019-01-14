// parseInt:: Objective: Converting strings to int numbers

var a = parseInt("10.3"); 
console.log(a); //result: 10

var b = parseInt(true);
console.log(b); //result" NaN

var c = parseInt(null);
console.log(c); //result: NaN

var string = parseInt("abc");
console.log(string); //result: NaN

var hexadecimal = parseInt(0x66) 
console.log(hexadecimal); //result: 102 

var exponencial = parseInt(4e1)
console.log(exponencial); //result 40

