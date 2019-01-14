//simple objects

let obj = {nickname: "yuri", age: 30, fullname: {firstName: "Yuri", lastName: "Vasconcelos" }};

let {nickname: name, age} = obj

console.log(name, age);


// //Renaming the object 

let obj2 = {cod: "1", gender: "male"};

let {cod: codigo, gender: sexo} = obj2

console.log(obj2);
console.log(codigo, sexo);


//nested objects.. objects with objects
let obj3 = {fullname: {primeironome: "yuri", quantosanos: 30}};

const {fullname: {primeironome, quantosanos}} = obj3;

console.log(primeironome, quantosanos);


//default values

let obj4 = {a: 1, b: 3}

const {a,b, c = 99} = obj4 //99 is default for c

console.log(a,b,c);