const Pessoa = require('./Pessoa').Pessoa;

class Mulher extends Pessoa{
    
    constructor(name, age){
        super(name, age);
        this.name = name,
        this.age = age
    }

    metodoMulher() {
        console.log('metodo mulher', this.name, this.age);
    }
    
}

module.exports = {
    Mulher
}