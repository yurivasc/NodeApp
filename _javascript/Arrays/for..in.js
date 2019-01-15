var a = ["a" , "b", "c"];

for (var x in a){
    console.log(x); //0,1,2
}

for (var x of a) {
    console.log(x); //a,b,c
}
