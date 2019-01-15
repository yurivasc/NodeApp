//The JavaScript delete operator 
//removes a property from an object; 

//if no more references to the same property are held, 
//it is eventually released automatically.

var Employee = {
    firstname: "John",
    lastname: "Doe"
}

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined
