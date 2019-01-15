const a = () => {

    const abc = "abc";

    const b = () => {
        console.log("hello");
    }
    
    return b;
}


a()();