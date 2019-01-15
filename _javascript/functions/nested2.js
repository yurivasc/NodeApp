const a = () => {
    const b = () => {
        console.log("hello");
    }

    return b;
}


a()();