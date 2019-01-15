import React, { Component } from 'react'


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`person constructor executed ${name}  - ${age}`);
    }

    doSomething() {
        console.log(`hi from person - super class`);
        return "..Person..";
    }
}

class Woman extends Person {
    constructor(name, age, gender = "female", type) {

        super(name, age)

        this.gender = gender;
        this.type = type;


        console.log(`Woman constructor executed ${name}  - ${age}`);
    }

    doSomething() {
        console.log('override test' + this.gender);
    }
}

class Man extends Person {
    constructor(name, age, gender) {
        super(name, age, gender)
    }

    doSomethingExecutingTheSuper() {
        var retornodoSuper = super.doSomething();
        console.log(retornodoSuper + " .. append ..");
    }

}


const anotherWayToDeclareClass = class {
    constructor(name) {
        this.name = name;
    }
}

class classWithGetterSetter {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name + "+ changing via get()"
    }

    set name(name) {
        this._name = name + " changing via set()"
    }
}

class IHaveStaticMethod {
    static writeSomething() {
        console.log('I am static, dont need to be instantiated');
    }
}



const executeAction = () => {
    var p = new Person('someone', 29);
    var w = new Woman('mari', 26, 'female', 'type1');
    var m = new Man('yuri', 30, 'male');

    p.doSomething();
    w.doSomething();
    m.doSomething();
    m.doSomethingExecutingTheSuper();

    var an = new anotherWayToDeclareClass();


    //getter and setter 
    var gs = new classWithGetterSetter('myName');

    console.log(`gs initial state ${gs.name}`);

    gs.name = 'yuri'; //trying to set

    console.log(`gs after setting state ${gs.name}`);
    ////////////////////////////////////////////


    //statics
    IHaveStaticMethod.writeSomething();
}




export default class Classes extends Component {
    constructor(props) {
        super(props);
        executeAction();
    }
    render() {
        return (
            <div>
                <p>Classes Component rendered</p>
            </div>
        )
    }
}
