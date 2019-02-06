const m = new Map()

//set
m.set('color', 'red')
m.set('age', 2)

console.log(m); //Map { 'color' => 'red', 'age' => 2 }

//delete
m.delete('color')

//size
console.log('size = ', m.size); //1

//has
m.has('color') //false;


//clear
// m.clear();



//initialize an map with values
var mv = new Map([['color', 'red'], ['something', 'else']]) //Map { 'color' => 'red', 'something' => 'else' }

console.log(mv);


//CONVERT THE MAP KEYS INTO AN ARRAY
const a = [...m.keys()]
const b = [...m.values()]
console.log(a); //[ 'age' ]
console.log(b); //[ 2 ]
