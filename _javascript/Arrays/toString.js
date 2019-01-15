res = [1,2,3].toString();

console.log(res); //1,2,3



res2 = [1, 2, [1, 2, 3], { a: "helo" }].toString(); //1,2,1,2,3,[object Object]

console.log(res2);


String([1,2,3]); //safer than toString();