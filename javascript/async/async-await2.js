//Async creates a promisse with the return.

const functionAsync = async () => {
  console.log("start promise async");
  setTimeout(() => {
    console.log("finished");
  }, 4000);
  return "retorno async";
};

const promiseAsync = new Promise((resolve, reject) => {
  console.log("start promise async");
  resolve("retorno promise");
  reject("rejected");
});

functionAsync().then((res, rej) => {
  console.log("then async", res);
});

promiseAsync.then((res, rej) => {
  console.log("then promise", res);
});

console.log("console.log");
