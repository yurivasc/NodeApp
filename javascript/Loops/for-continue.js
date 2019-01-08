

var arr = [0, 1, 2, 3];

for (var i = 0; i < arr.length; i++) {
  if (i == 1) {
    continue; //will go to next iteration
  }
  console.log(arr[i]);
}
