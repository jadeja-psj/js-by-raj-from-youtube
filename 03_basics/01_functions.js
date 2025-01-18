// functions
//  It’s a block of code that does something specific. You can write it once, give it a name, and then use (or "call") it whenever you need it.

// syntax
// function functionName()
// {

// }
// functionname() -> function call

// write a function to add two numbers

// function addTwoNumbers(num1,num2)
// {
//     console.log(num1+num2);
// }

// addTwoNumbers(1,2)

/*
 parameter vs arguments 
1. when we pass variable ot the time of function creation then it is called parameter
2. when we pass values at the time of function call then it is called arguments

problems that can occur for the above function
1. when a user enters a string as an argument. 
2. or else it enters null at the time of function call

exapmle1 addTwoNumbers(1,"a") //output:1a
example2 addTwoNumbers(1,null) // 1

To solve the above question we use return type of the function
*/

function addTwoNumbers(num1,num2)
{
    return Number(num1 + num2)
}

// we store the result in the variable because it will return a specific value it will not be directly printed

// const result = addTwoNumbers(1,3)
// console.log(result);//4


// const result = addTwoNumbers(1,"f") // NaN
// console.log(result);

function loginUserMessage(username = "sam") // default value
{
    // if user do not specify any name 
    if(!username) // or we can say if(username === undefined)
    {
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

// when we don't know that how many arguments a user wants fill give for example a shopping cart there we use spred and rest operator

function calculateCartPrice(val1,varl2,...num1)
{
    return num1;
}

// The below will return as array
// console.log(calculateCartPrice(100,2000,343,323,121,5,9))

// passing objects as parameter in function

const users = {
    username:"sunny",
    price:100
}

function handleObject(anyobject)
{
    console.log(`UserNname is ${anyobject.username} and price is ${anyobject.price}`); 
    
}

// handleObject(users)

// We can directly pass the object in function call as argument
// handleObject({
//     username:"sam",
//     price:139
// })


// We can pass array as parameter
const myNewArray = [200,400,100,600]
function returnNewArray(getanyArray)
{
    return getanyArray[1];
}

console.log(returnNewArray(myNewArray))

