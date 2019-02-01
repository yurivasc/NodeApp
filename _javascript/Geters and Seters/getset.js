//without getters and setters

const person = {
    name: "yuri",
    lastname: "vasconcelos",
    
    fullname(){
        return this.name + ' ' + this.lastname;
    }
}

// person.fullname = "anything " //doesnt work
console.log(person.fullname()); //yuri vasconcelos


//Solution: geters and setters.
const person2 = {
    name: "yuri",
    lastname: "vasconcelos",

    get fullname() {
        return this.name + ' ' + this.lastname;
    },
    set fullname(value){
        this.name = value.split(' ')[0];
        this.lastname = value.split(' ')[1];
    }
}

console.log(person2.fullname); //yuri vasconcelos
person2.fullname = 'another thing';
console.log(person2.fullname, person2); // 'another thing', { name: 'another', lastname: 'thing', fullname: [Getter / Setter] }




