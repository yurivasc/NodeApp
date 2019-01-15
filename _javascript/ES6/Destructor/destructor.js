var { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5


var { a: newa = 10, b: newb = 5 } = { a: 3 };

console.log(newa); // 3
console.log(newb); // 5