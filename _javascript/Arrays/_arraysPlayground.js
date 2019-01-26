//The following statements create equivalent arrays:

// var arr = new Array(element0, element1, ..., elementN);
// var arr = Array(element0, element1, ..., elementN);
// var arr = [element0, element1, ..., elementN];


const numbersArray = [1,7,5, 2, 3,5,6];
const array2 = Array(1,2,3);


//diff MAP VS FOREACH  
//. map return a new array
//. forEach doesnt' return anything. - and modifies the original array

///////////////////////////////////////////////////////////
const mapFunction = (a) => {
    const newArray = a.map(x => x * 2);
    console.log(`after map execution ${newArray}` );
    
}

const forEachFunction = (a) => {
    a.forEach(x => x * 2); // doesn't return anything
    console.log(`after forEach execution ${a}` );
}

///////////////////////////////////////////////////////////

//creates a new array
const sliceFunction = (a) => {
    var newArray = a.slice(1,5);
    console.log(`after slice execution ${newArray}` );
}

const contactFunction = (a, b) => {
    console.log("after contact execution:" + a.concat(b));
}

const pushFunction =  (a) => {
    console.log(a.push(2)); //retorna o length do array
    console.log(`after push execution ${a}`);
}

//return a new array
const filterFunction = (a) => {
    console.log(`after filter execution ${a.filter(x=>x > 3)}`);
}

//The find() method returns the value of the first element
// in the array that satisfies the provided testing function. 
//Otherwise undefined is returned.
const findFunction = (a) => {
    console.log(`after findFunction execution ${a.filter(x=> x === 2)}`);
}


//The includes() method determines whether an array includes a certain element, 
//returning true or false as appropriate.
const includesFunction = (a) => {
    console.log(`${a.includes(1)}`)
    console.log(`${a.includes(99)}`)
}



/*
The every() tests whether all elements 
pass the test implemented by the provided function.
*/
const everyFunction = (a) => {
    console.log(`after every execution ${a.every(x=> typeof x == "number")}`);
    console.log(`after every execution ${a.every(x=> typeof x == "string")}`);
}


const fillFunction = (a) => {
    //todo
}

/*
The join() method returns a string 
by concatenating all of the elements in an array
separated by commas or a specified separator string.
*/
const joinFunction = (a) => {
    console.log(`after execution join function ${a.join('-')}`)
}


const sortFunction = (a) => {
    console.log(`before sort execution ${a}`);
    console.log(`after sort execution ${a.sort()}`);
}
