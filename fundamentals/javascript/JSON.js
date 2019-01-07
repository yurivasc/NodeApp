const ob  = {
    name: "yuri",
    age: 23
};

const complexobj = {
    pessoa: {
        idade: 30,
        name: {
            firstname: "yuri",
            lastname: "vasconcelos",
            anotherComplex: () => {console.log('..')},
            somethingelse: {
                another: {prop: {another: "hi"}}
            }
        }
    },
    isactive: false
}

var s = JSON.stringify(ob);
var objParsed = JSON.parse(s);

console.log(ob);
console.log(s);
console.log(objParsed);


console.log(complexobj); 
console.log(JSON.stringify(complexobj));