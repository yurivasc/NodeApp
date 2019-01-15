//The static keyword defines a static method for a class. 
//Static methods aren't called on instances of the class. 
//Instead, they're called on the class itself. 
//These are often utility functions, such as functions to create or clone objects.


class ClassWithStaticMethod {
    static staticMethod() {
        return 'static method has been called.';
    }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."

