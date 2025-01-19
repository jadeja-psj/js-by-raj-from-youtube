const user = {
    username: "hitesh",
    price:8999,
    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this) // it refers to the current object
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //{}
// -> in our code editor this refers to the empty object but when we execute the above in the console it refers to 
// window object therefore we are able use the methods that is inside window object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
function code()
{
    // console.log(this);
    let username = "sam"
    console.log(this.username); //output: undefined 
    // here this does not works it only works in object
}*/

// when we run this keyword inside a function then it print some output rather than empty object

/*const code = function()
{
    let username = "sam"
    console.log(this.username); //output: undefined 
    // here this does not works it only works in object
}*/

// Arrow function
const code = () => {
    let username = "sam"
    console.log(this.username); //undefined
    console.log(this); //{}
}
// code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return function
// const addTwo = (num1,num2) => num1 + num2 //9

// const addTwo = (num1,num2) => (num1 + num2) // 9

const addTwo = (num1,num2) => ({username:"sam"})

console.log(addTwo(4,5));


// Note: Difference between arrow function and normal function 