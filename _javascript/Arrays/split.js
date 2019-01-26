//split takes a string and splits to an array.

//normally used to join after doing the operation. join does the reverse, takes an array and concats to a string

//mystring.splice('<<char>>')  - returns an array and the actual variable string is still the same.


const str = "hello-world";

const result = str.split('');   console.log(result, str);   //[ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]   //"hello-world"
const result2 = str.split('-'); console.log(result2);  // ['hello', 'world']


const result3 = str.split('-').join(''); console.log(result3); //helloworld

const join = ["a", "b", "c"].join(''); console.log(join); //a,b,c, default it returns an string with commas as separators (a,b,c) but you can change this default ex: myarray.join('-') 