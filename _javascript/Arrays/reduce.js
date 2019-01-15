//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const array1 = [1, 2, 3, 4, 5];

var res = array1.reduce((a, c) => {
    console.log("acumulator :" + a, "current value :" + c);
    return a * c;
});

console.log(res);


//I can implement a sums and multip.

const sum = array => {
  return array.reduce((a, c) => a + c);
};

const multiply = array => {
  return array.reduce((a, c) => a * c);
};

console.log(sum([1, 2, 3]));



var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    , initialValue
);

console.log(sum) // logs 6

