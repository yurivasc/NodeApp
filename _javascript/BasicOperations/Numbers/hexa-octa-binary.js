//Hexadecimal
//Hexadecimal number syntax uses a leading zero 
//followed by a lowercase or uppercase Latin letter "X"(0x or 0X).
//If the digits after 0x are outside the range(0123456789ABCDEF), 
//the following SyntaxError is thrown: "Identifier starts immediately after numeric literal".

0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10


//Octal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O"(0o or 0O).
//Because this syntax is new in ECMAScript 2015, 
//see the browser compatibility table, below.If the digits after the 0o are outside the range(01234567), 
//the following SyntaxError is thrown: "Missing octal digits after 0o".

var n = 0O755; // 493
var m = 0o644; // 420