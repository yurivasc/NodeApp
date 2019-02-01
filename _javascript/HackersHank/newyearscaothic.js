const array = [2 ,1 ,5 ,3 ,4];

var sum = 0;
const tooCaothic = () => {
    for (var i = 1; i < array.length+1; i++) {
       
        if (i == array[i-1]) {
            continue;
        } else if (i == array[i-2]) {
            console.log('a => ', i, array[i]);
            sum = sum + 1;
        } else if (i == array[i-3]) {
            console.log('b => ', i, array[i]);
            sum = sum + 2;  
        }
        else if (i > array[i-4]){
            sum = "Too caothic";break;
        }
    }
    return sum;
}

console.log(tooCaothic(array));

