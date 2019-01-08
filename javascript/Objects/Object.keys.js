const obj = { name: "yuri", age: 30 }

console.log(Object.keys(obj));       //output: [ 'name', 'age' ]

Object.keys(obj).map(x=> console.log(x)); // output: name age




console.log(obj.keys); //undefined