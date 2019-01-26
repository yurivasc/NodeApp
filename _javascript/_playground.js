//Simplistic.So very normal looking, its almost comforting:

function main() {
    var userName = "Sean";

    console.log(name());

    function name() {
        return userName;
    }
} 
main();
//this way username is accessible , however..


//this way will throw an error because username is not defined.
//var userName = "Sean";

// console.log(name());

// function name() {
//     return userName;
// }