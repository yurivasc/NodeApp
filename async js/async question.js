const fn = async() => {
    for (var i = 0; i < 10312300000; i++){
        if (i===5000000000){
            console.log('cheguei nos 5000000000')
        }
    }

    return 'finished long..'
}


const fn2 = async() => {
    fn();
    console.log('fn2');
}


fn2();
console.log('ok?')
