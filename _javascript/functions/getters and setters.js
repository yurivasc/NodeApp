//http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
//https: //http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/

var obj = {
  log: ["a", "b", "c"],
  get latest() {
    if (this.log.length == 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
};

console.log(obj.latest);
// expected output: "c"



//setter

var language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
}

language.current = 'EN';
language.current = 'FA';

console.log(language.log);
// expected output: Array ["EN", "FA"]

