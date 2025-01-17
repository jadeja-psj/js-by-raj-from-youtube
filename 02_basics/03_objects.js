// singleton will not formed when we use literals and it will be formed when we use constructor

// object literals
const Jsuser = {
    name:"fastboy",
    // by default the keys are taken as strings in objects.
    // "name" and name boy are correct
    age:10,
    location:"Delhi",
    email:"hello@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Tuesday","wednesday"]
}

// There are two ways to access the keys in the objects in js
// first way
// console.log(Jsuser.age);
// second way
// console.log(Jsuser["age"]); 

// NOTE:
// if the key is written in the string formate then we cannot use the first method

// Example
const obj = {
    name:"rajendre",
    "full name":"rajendra guru"
}


// console.log(obj.name);

// console.log(obj.full name) // it will give error because the key is taken as string

// using symbol in objects

const mySym = Symbol("Key1")

const JsUser = {
    name:"fastboy",
    [mySym]:"mykey1",
    age:10,
    location:"Delhi",
    email:"hello@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Tuesday","wednesday"]
}

// console.log(JsUser[mySym]);
JsUser.email = "fastboy@microsoft.com"
// console.log(JsUser.email);
// if we want to freez the object that no chnages should occur than
// Object.freeze(JsUser)
// JsUser.email = "fastboy@google.com" // changes will not occur because the object is freeze


// function in objects
JsUser.greeting = function(){
    console.log("Hello everyone welcome to my repo");
}

console.log(JsUser.greeting) //[Function (anonymous)]
JsUser.greeting()//Hello everyone welcome to my repo

JsUser.greetingTwo = function(){
    console.log(`Hello everyone welcome to my repo ${this.name}`);
}
// This referst to the refercence to currrent object

JsUser.greetingTwo()