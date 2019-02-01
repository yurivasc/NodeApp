var obj = { name: "yuri" };

Object.prototype.toArray = function() {
    var me  = this.valueOf();
    return Object.entries(me);
}

console.log(obj.toArray());