console.log('does async return a promise?')

const myfuncasync = async () => {
    return "resolved";
}

const myfuncpromisse = new Promise((res, rej) => {
    res("resolved");
});

const myfuncSimplePromisse = () => {
    return Promise.resolve('resolved');
}


myfuncasync().then((result) => { console.log(result) });
myfuncpromisse.then((result) => { console.log(result) });
myfuncSimplePromisse().then((result) => { console.log(result) });



threadasync();
//example using await / we can only use await in async functions,
//that's why I have created a new threadasync function..
//otherwise executing the var retornoAsync = await myfuncasync(); direct, wont work

const threadasync = async () => {
    var retornoAsync = await myfuncasync();
    console.log(retornoAsync);
}