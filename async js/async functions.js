const f = async(name) => {
    return "func executed";
}


console.log(f)  //[AsyncFunction: f]

f().then(x=> console.log(x)); //func executed


//using async/await
const caller = async () => {
    const j = await f();
    console.log(j); //func executed
}

caller();