class Parent{
    hello(){
        console.log("hello");
    }
}

class child extends Parent{}

let obj =new child()
// obj.hello()


class Person{
    constructor(){
        console.log("Enter Parent Constructor");
        this.species = "homo sapiens";
    }

    eat(){
        console.log("eat");
        
    }
    sleep(){
        console.log("sleep");
        
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("Enter Child Constructor");
        super();
        this.branch = branch
        console.log("Exit Child Constructor");
    }
    work(){
        console.log("solve problems, build something");
    }
}



let FastObj = new Engineer("chemical Engineering")
console.log(FastObj.branch)
