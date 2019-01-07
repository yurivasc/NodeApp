const obj = {
    firstChild:{
        age: 1,
        name: 'yuri'
    },
    secondChild:{
        title: [1,2,3],
        albums: {first:"one" , num: 20}
    }
}

const spreadAddFunction = (obj) => {
    const newObject =
    {
        newprop: "anotherNewProj",
        ...obj,
        anotherprop: "anotherNewProj",
        anotherComplexProp: {status: "200"}
    }

    console.log(newObject);
}

spreadAddFunction(obj);


const spreadArrays = (arr) =>{
    const newArray = [...arr, 98, 99]

    console.log(newArray);
}


spreadArrays([1,2,3]);


