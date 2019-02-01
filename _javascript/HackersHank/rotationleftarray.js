//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=arrays

const a = [1, 2, 3, 4, 5]

const n = 4


var rotArray = (a, n) => {

    for (var i = 0; i < n; i++) {
        var spliced = a.splice(0, 1);
        a.push(...spliced);
    }
    return a;
}

var retorno = rotArray(a, n);

console.log(retorno);



