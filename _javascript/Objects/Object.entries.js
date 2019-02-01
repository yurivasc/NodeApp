const obj = { name: "yuri", age: 30 };
Object.entries(obj)
//returns array of array.
//[['name', 'yuri'], ['age', 30]]

var arob = Object.entries(obj);

arob.forEach(e => console.log(e));
// ['name', 'yuri']
// ['age', 30]