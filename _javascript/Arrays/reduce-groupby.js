var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (a, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}




//my implementation of groupby
var people2 = [
    { name: "Alice", age: 21 },
    { name: "Max", age: 20 },
    { name: "Jane", age: 20 },
    { name: "Max", age: 25 }
];

var filteredArray = people2.filter(x => x.name == "Max");
console.log(filteredArray);

var res = people2.filter(x => x.name == "Max").reduce((a, c) => {
    return a.age + c.age
});



