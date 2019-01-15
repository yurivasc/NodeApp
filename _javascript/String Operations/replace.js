// The replace() method returns a new string 
// with some or all matches of a pattern replaced 
// by a replacement.

// The pattern can be a string or a RegExp, 
// and the replacement can be a string or a function to be called for each match.
// If pattern is a string, only the first occurrence will be replaced.

var p = 'The quick brown fox jumped over the lazy dog. If the dog reacted, was it really lazy?';

var regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));

// expected output: "The quick brown fox jumped over the lazy ferret. If the ferret reacted, was it really lazy?"

var a = "J J J";

var res = a.replace("J", "X");

console.log(a); 
console.log(res); //output:  X J J  -- only replace the first occorence.