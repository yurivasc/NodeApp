console.log(String.prototype);

String.prototype.isok = function () {
    var passed = this.valueOf();
    return passed;
}

console.log('haha'.isok());
