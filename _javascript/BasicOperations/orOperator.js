const op1 = undefined || "abc";
const op2 = false || "abc";
const op3 = null || "abc";
const op4 = "exist" || "test";

console.log(op1, op2, op3, op4);

//  operator ? true :false
const conditional = false;
const conditionalResult = conditional ? "resultado true": "resultado falso";

console.log(conditionalResult)

// with expression

const somevalue = "something";
const resultadoisNull = (somevalue == "hello") ? "yes": "no";