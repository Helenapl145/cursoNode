class Person {
    constructor(name){
        this.name = name
    }

    sayMyName(){
        return `Hello, my name is ${this.name}` /*usa o valor passado no arquivo index.js*/
    }
}


module.exports = { /*exportação do modulo*/
    Person,
}