const nestedFunction = () => {
        throw new Error("nested function error");
}

const mainfunction = () => {
    try {
        nestedFunction();
    } catch (e) {
        console.log("error from anotherfunc")
    }
}


mainfunction();