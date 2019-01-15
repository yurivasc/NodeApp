// Async arrow functions look like this:

// const foo = async () => {
//   // do something
// }
// The anonymous form works as well:

// const foo = async function() {
//   // do something
// }
// An async function declaration looks like this:

// async function foo() {
//   // do something
// }
// Using async function in a callback:

// const foo = event.onCall(async () => {
//   // do something
// })

// const promise1 = new Promise((resolve, reject) => {
//   console.log("started the promisse execution");

//   setTimeout(() => {
//     console.log("finished");
//     resolve("done");
//   }, 1500);
// });

const longPromise = new Promise((resolve, reject) => {
  console.log("started longasync promisse");
  for (let i = 0; i < 9999; i++) {
    for (let i = 0; i < 299999; i++) {}
  } //just a long execution
  console.log("finished longasync promisse");
  resolve("finished");
});

const longAsync = async () => {
  console.log("started longasync async");
  for (let i = 0; i < 9999; i++) {
    for (let i = 0; i < 299999; i++) {}
  }
  console.log("finished longasync async");
  return "retorno longasync";
};

const notAsyncFunction = () => {console.log('not async function started')};

const mainthread = async () => {
  await console.log("started main thread"); 
  notAsyncFunction();
  console.log('console.log is not async so will execute after the await');
  longAsync();
  longPromise.then();
};

mainthread();

































function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
I
