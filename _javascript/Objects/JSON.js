//JSON.parse(string)
//Converts a JavaScript Object Notation (JSON) string into an object.

//JSON.stringfy(JSON)
//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

const ob = {
  name: "yuri",
  age: 23
};

const complexobj = {
  pessoa: {
    idade: 30,
    name: {
      firstname: "yuri",
      lastname: "vasconcelos",
      anotherComplex: () => {
        console.log("..");
      },
      somethingelse: {
        another: { prop: { another: "hi" } }
      }
    }
  },
  isactive: false
};

var s = JSON.stringify(ob); //output: { name: 'yuri', age: 23 }
var objParsed = JSON.parse(s); //output: {"name":"yuri","age":23}

console.log(ob);
console.log(s);
console.log(objParsed);

console.log(complexobj);
console.log(JSON.stringify(complexobj));
