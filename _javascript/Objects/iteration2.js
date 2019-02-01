const obj = { name: "yuri", age: 30 };

var aob = Object.entries(obj);
console.log(aob);
//[ [ 'name', 'yuri' ], [ 'age', 30 ] ]



const newObject = { something: "else" }

for (let i = 0; i < aob.length; i++) {
    if (aob[i][0] == "name"){
        console.log('isname', aob[i][0]);
        newObject[aob[i][0]] = aob[i][1];
    }else{
        console.log('notname', aob[i][0])
    }
}

console.log(newObject);


String.prototype.isok = function(a){
    return "yes";
}