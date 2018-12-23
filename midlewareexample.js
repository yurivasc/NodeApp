const midlewareexample = new Promise((res,rej)=>{
    res("ok");
    rej("rej");
});
    

module.exports = {
    midlewareexample
}