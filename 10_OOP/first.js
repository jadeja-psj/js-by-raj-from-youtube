// Direct way of creating an object

const student = {
    fullName: "Fast",
    marks: 94.4,
    printMask: function(){
        console.log("marks = ", this.marks);  
    },
}

console.log(student);

const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    }
}

const karanArjun = {
    salary:50000,
    calcTax(){
        console.log("Tax rate is 20%");
    }

}

// to make the function of employee as an prototype of karnArjun

karanArjun.__proto__ = employee;

// if object and its prototype both have the same method than the method of the object will be used rather than the method of prototype.

console.log(karanArjun.calcTax()); 


