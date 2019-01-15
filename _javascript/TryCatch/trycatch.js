try {
    throw "..";
} catch (e) {
    console.log(e);
}

//output: ..

try {
    throw new Error();
} catch (e) {
    console.log(e);
}

//output:
/*
Error
    at Object.<anonymous> (C:\Projects\node\NodeApp\_javascript\Playground\a.js:8:9)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:282:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:743:3)
*/


try {
  throw new TypeError();
} catch (e) {
  console.log(e);
}
