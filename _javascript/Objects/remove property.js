function removeProperty(obj, prop) {
    if (Object(obj).hasOwnProperty(prop)) {
        delete obj[prop];
        return true;
    }
    return false;
}

const obj = { name: "yuri", age: 30 };
const prop = "age";

let x =removeProperty(obj, prop);

console.log(x, obj);

