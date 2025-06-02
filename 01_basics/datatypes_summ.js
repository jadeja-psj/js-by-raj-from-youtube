// There are 2 types of datatypes they are:
// primitive and non-primitive

// primitive this are call by value
//  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

// console.log(id === anotherId);

//BigInt
const bigNumber = 123243534656534546768756454658768709807667657657868776658795489760945n
// console.log(bigNumber)


// js is a dynamically typed language

// Reference or non-primitive

// Arrays, Objects, functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj ={
    name:"fast",
    age:"17"
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);// typeof is used to find the datatype of the variable

console.log(typeof myFunction); // function or function object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap(Non-primitive)

let myYoutubename = "Fastdotcom"
let anothername = myYoutubename

anothername = "Fastusedotcom"
console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "Fastgoogle@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
