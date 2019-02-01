

Object.prototype.removeProp = function (prop) {
    var me = this.valueOf();
    delete me[prop];
    return me;
}

console.log(obj.removeprop('name'));