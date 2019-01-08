class Pessoa {
  
    constructor(name, age){
        console.log('constructor pessoa', name,age)
    }
    
    metodoPessoa(){
        console.log('metodo pessoa')
    }
}

module.exports = {
    Pessoa
}