// parseFloat:: Objective: Converting strings to float numbers

var a = parseFloat("10.3");
console.log(a); //result: 10.3

var b = parseFloat(true);
console.log(b); //result" NaN

var c = parseFloat(null);
console.log(c); //result: NaN

var string = parseFloat("abc");
console.log(string); //result: NaN

var hexadecimal = parseFloat(0x66);
console.log(hexadecimal); //result: 102 

var exponencial = parseFloat(4e1);
console.log(exponencial); //result 40

