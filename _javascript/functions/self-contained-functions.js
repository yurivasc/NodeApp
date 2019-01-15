//Its all about variable scoping.
//Variables declared in the self executing function are, by default,
//only available to code within the self executing function.

(function() {
  console.log("hi");
})();

(() => {
  console.log("hello");
})();




//Simplistic.So very normal looking, its almost comforting:

var userName = "Sean";

console.log(name());

function name() {
    return userName;
}

//this will throw an error because username is not in the function.