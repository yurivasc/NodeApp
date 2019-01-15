/*
Since a nested function is a closure, 
this means that a nested function can "inherit" the arguments and variables of its containing function. 
In other words, the inner function contains the scope of the outer function.
*/


const func = () => {
    this.a = "hi there";

    //..inner func is only accessed via func.
    const innerfunc = () => {
        console.log("hello");
        console.log(this.a); //inherit the scope of father.
    }


    innerfunc();
}

func();