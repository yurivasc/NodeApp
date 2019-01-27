function vowelsAndConsonants(s) {

    const z = s.split('');

    for (let x of z) {
        if (['a', 'e', 'i', 'o', 'u'].includes(x)) {
            console.log(x);
        }
    }

    for (let x of z) {
        if (!['a', 'e', 'i', 'o', 'u'].includes(x)) {
            console.log(x);
        }
    }

}


vowelsAndConsonants('javascriptloops');