//join is used in arrays and takes one optional argument (separator) and returns a string. The original array stays the same.
//join(separator?: string): string

//split does the reverse, takes a string and splits to an array

var a = ["hi", "hello", "hithere,", "somethingelse"];

var res = a.join(); console.log(res);  //output:  hi, hello, hithere, , somethingelse.//default join will put an , as separator
var res2 = a.join('-'); console.log(res2) //output:  hi-hello-hithere,-somethingelse


console.log(a);   //output:  original array

//normaly is used with split later, to transform in another array, for example:

var splited = res2.split('-'); console.log(splited); //[ 'hi', 'hello', 'hithere,', 'somethingelse' ]

