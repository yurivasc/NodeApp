//An arrow function expression has a shorter syntax 
//than a function expression 
//and does not have its own this, arguments, super, or new.target.
//These function expressions are best suited for non - method functions, 
///and they cannot be used as constructors.


/*
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }
*/


var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]





// Parenthesize the body of function to return an object literal expression:
params => ({ foo: bar }) 