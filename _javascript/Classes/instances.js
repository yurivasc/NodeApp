const {SimpleClass, SimpleClass2} = require('./class')
const Homem = require('./Homem').Homem;
const Mulher = require('./Mulher').Mulher;
const Pessoa = require('./Pessoa').Pessoa;

var sc = new SimpleClass();
sc.metodo();

var sc2 = new SimpleClass2();
sc2.metodo();

var homem = new Homem("yuri", 30);
homem.metodoHomem();

var mulher = new Mulher("Mariana", 27);
mulher.metodoMulher();

var pessoa = new Pessoa("default", 99);
pessoa.metodoPessoa();


