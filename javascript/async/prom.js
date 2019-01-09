
var promise1 = new Promise( (resolve, reject) => {
    
        console.log('starting promisse 1');
        setTimeout((longprocessing) => {
            resolve('done');
            reject('rejeitei');
        }, 3000)
});

var promise2 = new Promise( (resolve, reject) => {
    console.log('starting promisse 2');

    resolve();
    setTimeout((longprocessing) => {
        resolve("hello world");
        reject('rejeitei');
    }, 3000)
});


var promise3 = new Promise( (resolve, reject) => {
    console.log('starting promisse 3');

    setTimeout((longprocessing) => {
        resolve('done 3');
        reject('rejeitei');
    }, 5000)
});

const promisse4 = new Promise((resolve, reject) => {
    const a = 1;
    
    if (a==1){
        resolve({obj: "promisse4"});
    }
    else{
        reject("never");
    }
})




const executePromisses = () => {
    // promise1.then((result) => {console.log("promisse1 foi resolvida", result)});
    // promise2.then((result) => {console.log("promisse2 foi resolvida", result)});
    // promise3.then((result) => {console.log("promisse3 foi resolvida", result)});
    promisse4.then(result => console.log(result));
}



executePromisses();


// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then(function(value) {
//     console.log(value);
//     // expected output: "foo"
//   });
  
//   console.log(promise1);
//   // expected output: [object Promise]