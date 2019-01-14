class A {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    metodo(){
        console.log(this.a + this.b);
    }
}



module.exports = A;


///require ('./export1.js');
