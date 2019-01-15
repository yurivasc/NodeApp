console.log(typeof 42);
// expected output: "number"

console.log(typeof "blubber");
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof {});
// expected output: "object"

console.log(typeof []);
// expected output: "object"

console.log(typeof und);
// expected output: "undefined";




const c = () => {
  console.log("hi");
};

console.log(typeof c); //output: function