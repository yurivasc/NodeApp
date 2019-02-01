const obj = {name:'yuri'};

Object.defineProperty(obj, 'property1', {
    value: 42,
    writable: false
});

console.log(obj); //{ name: 'yuri' }
console.log(obj.property1);  //42