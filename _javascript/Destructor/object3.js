const person = {
    name: "Yuri",
    age: 30,
    text: "something",
    complexObject: {prop: "prop"},
    array: []
}

const myfunc = ({name="default", age}) => {
    console.log(name);
    console.log(age);
}

myfunc(person);


