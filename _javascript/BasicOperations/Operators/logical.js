a1 = true && true        // t && t returns true
a2 = true && false       // t && f returns false
a3 = false && true       // f && t returns false
a4 = false && (3 == 4)   // f && f returns false
a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
a6 = false && 'Cat'      // f && t returns false
a7 = 'Cat' && false      // t && f returns false
a8 = '' && false         // f && f returns ""
a9 = false && ''         // f && f returns false



o1 = true || true        // t || t returns true
o2 = false || true       // f || t returns true
o3 = true || false       // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
o6 = false || 'Cat'      // f || t returns "Cat"
o7 = 'Cat' || false      // t || f returns "Cat"
o8 = '' || false         // f || f returns false
o9 = false || ''         // f || f returns ""



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

