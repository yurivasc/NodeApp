//destructor arrays - uses the order
let myArray = [1, 2, 3, 4, 5];

const [, , c, d] = myArray;

console.log(c, d);

//objects

let myObject = { name: "yuri", age: 23 };

//if I wanted to access name, I would have to do myObject.name, myObject.age
//I can simplify this with destructor

const { name, age } = myObject;

console.log(name, age); //instead of console.log(myObj.name, myObj.age).

//i could also change the props names
const { name: nome, age: idade } = myObject;
console.log(nome, idade); //instead of console.log(myObj.name, myObj.age).

//nested objects.. objects with objects
const myObjObj2 = {
    name: "yuri",
    obj: { a: 77, b: 88 }
};

const {
    name: myNewName,
    obj: { a: mynewA }
} = myObjObj2;

console.log(myNewName, mynewA);

//with default values

const obj = { name: "hh", prop3: "nothing", age: 23 };

const { name: nome1, age: idade1, prop3, gender = "male" } = obj; // by doing gender='male' we are setting the default value of gender
//so even if obj doesn't have this property, it will consider 'male'

console.log(nome1, idade1, prop3, gender);
