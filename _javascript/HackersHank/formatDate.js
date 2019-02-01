function formatDate(userDate) {

    let array = userDate.split('/');
    console.log(array);
    var newArray = array.map((e) => { 
        if (e.length == 1) { 
            return "0"+e;
        }
        else{
            return e;
        }
    });
    day = newArray.splice(1, 1);
    let array2 = newArray.reverse();
    newArray.push(...day);
    return newArray.join('');


}

console.log(formatDate("01/3/2014"));







// var array = [1,2,3,44,55];

// var z = array.map(e=>{
//     return e*2;
// })

// console.log(array,z);

