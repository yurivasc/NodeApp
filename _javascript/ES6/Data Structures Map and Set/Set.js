//Set are the new object type in Javascript that allows
// you to create non - repeating elements or simply unique elements 

//SET 

var s = new Set();
s.add("hello")
s.add("goodbye")
s.add("hello"); // if it is an duplicated then it will not insert 



console.log(s); //Set { 'hello', 'goodbye' }

//delete
s.delete("hello");
console.log(s); //goodbye

//has
console.log(s.has('goodbye')); //true

//size
console.log(s.size); //1

//forEach
s.forEach(x=> console.log(x)); //goodbye


//entries
s.entries();
console.log(s.entries().next());

//clear
s.clear();
console.log(s); //Set {}




var array = [1,1,1,4];
var arraySet = new Set(array);
console.log(arraySet); //Set { 1, 4 }