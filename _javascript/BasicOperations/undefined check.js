n2 = !!{}; // !!truthy returns true: any object is truthy...

var variable = "testing..";
var variableUndefined = undefined;

n1 = !!{};
n2 = !![];
n3 = !!"string";
n4 = !!variable;
n5 = !!variableUndefined;

console.log(n1, n2, n3, n4, n5); //true true true true false


//Example: will check if the object is != undefined.

if (!!{ objeto: "..." }) {
    //doSomething..
}

