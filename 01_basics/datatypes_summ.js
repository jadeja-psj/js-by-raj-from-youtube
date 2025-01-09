// data are divided into two types 
// 1. primitive
// 2. Non-primitive datatypes

// Primitive
// 7 types: String, Number, Booleean, null, undefined, Symbol
// BigInt

const score = 100 //Number type
const scoreValue = 100.34

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = ('123')

// console.log(id === anotherId);

// JS is Dynamic typed language


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"] // Array
// object
let myobj = {
    name: "fast",
    age: 25
}
// function
const myFunction = function()
{
    console.log("Hello every one welcome to the new series of JavaScript")
}

// console.log(typeof myFunction)


// *********************************************************

// Stack (Primitive), Heap(Non-primitive)

let myYoutubename = "faststudiesdotcom"

let anothername = myYoutubename // here the copy of myYoutubename is given no the original reference
anothername = "Buildproject&Earn"

// console.log(myYoutubename);
// console.log(anothername);

// The below is non-primitive type so it will be store in the heap and reference of it will be given

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne // reference of userOne and userTwo is same

userTwo.email = "user2@google.com"

console.log(userOne.email) // output: user2@google.com
console.log(userTwo.email) // output: user2@google.com as reference is passed

