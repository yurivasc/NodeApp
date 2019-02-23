const express = require('express');
const app = express();


const fn = async() => {
    for (var i = 0; i < 10312300000; i++){
        if (i===103120003000){
            console.log('cheguei nos 10312003000')
        }
    }

    return 'finished long..'
}


const fn2 = async() => {
    fn().then(result => console.log('retorno', result));
    console.log('fn2');
}

app.get('/', (req, res) => { 
    fn2();
    res.send('ok') 
});



app.listen(3000, () => { console.log('http://localhost:3000' )})