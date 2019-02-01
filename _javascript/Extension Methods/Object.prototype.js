const obj = { name: "yuri", age: 30 };


Object.prototype.newfunction = function(prop){

    var me = this.valueOf();
    
    console.log(me); //{ name: 'yuri', age: 30 }
    
    return "returned from myfunction";
}

console.log(obj.newfunction('name')); //returned from myfunction