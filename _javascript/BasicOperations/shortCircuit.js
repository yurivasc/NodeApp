//Short - circuit evaluationSection
//As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:

const a = 1
const b = 1;

var x = (a == b) && "ok" //- circuit evaluated to the falsy expression;
var y = (a == b) || "hello";

console.log(x,y);