class Person {
    constructor(name, lastname){
        this.name = name,
        this.lastname = lastname
    }
    
    get FirstName () {
        return this.name;
    }

    set FirstName (value) {
        this.name = value;
    }


}


var myc = new Person("yuri", "vasconcelos");

console.log(myc.FirstName);
myc.FirstName = "HelloWorld"
console.log(myc.FirstName);