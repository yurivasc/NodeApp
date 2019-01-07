// const mw = new Promise((res,rej)=>{
//     res("ok");
//     rej("rej");
// });
    
const mw =  (req,res,next) => {
    console.log('mw actioned');
    next();
}

const mw404 =  (req,res,next) => {
   res.send("404");
}


module.exports = {
    mw,
    mw404
}