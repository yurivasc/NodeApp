const Pessoa = require('./Pessoa').Pessoa;


class Homem extends Pessoa{
    
    constructor(name, age){
        super(name, age)
    }

    metodoHomem(){
        console.log("metodo homem");
    }
}

module.exports = {
    Homem,
}