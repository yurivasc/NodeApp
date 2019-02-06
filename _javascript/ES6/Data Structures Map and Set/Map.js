const m = new Map()

//set
m.set('color', 'red')
m.set('color', 'grey'); //will overide the first set
m.set('age', 2)

console.log('map array is ', m); //Map { 'color' => 'red', 'age' => 2 }


//get
console.log('getting color ', m.get('color')); //getting color  grey

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



//CONVERT ARRAY TO MAPS
const myarray = [1,2,3]
var mymap = new Map([myarray]);
console.log('converted array to maps = ', mymap)


//CONVERT THE MAP KEYS INTO AN ARRAY
const c = [...m.entries()]
console.log(c); //[ [ 'age', 2 ] ] array of arrays