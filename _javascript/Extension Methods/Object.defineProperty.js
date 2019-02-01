Object.defineProperty(String.prototype, "SayHi", {
    value: function () {
        return "Hi " + this + "!";
    },
    writable: true,
    configurable: true
});

console.log("mystring".SayHi());