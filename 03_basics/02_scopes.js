// In JavaScript, scope refers to the context in which variables, functions, and objects are accessible or visible. It determines where in your code you can reference a variable or function.

{} // this is the scope in most of the programming language
/*
Scopes for let, const and var
let -> variable cannot be redeclared but can be updated and has block scope -> it can be used inside a curly braceses where it is declared
const -> neither be redeclared nor be updated, it also have block scope
var -> variable can be re-declared and updated. It has global scope means it can be accessed inside and outside the block 
*/

var c = 300;
let a = 400;
/*
if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // both the c are treated as same means the above value is overridden because var datatype has global scope
  console.log("Inner b:", b);
  console.log("Inner a:", a);
  console.log("Inner c:", c);
}*/

// console.log(a); // it will give error because it has local scope
// console.log(b); // it will give error because it has local scope
// console.log(c);

const b = 30; // this b and the b inside if block both are treated different because constant and let variable datatype has local scope
/*
console.log("Outer b:",b);
console.log("Outer a:",a);
console.log("Outer c:",c);
*/

let v = 10;
const x = 20;
var y = 30;

function f() {
  v = 20;
  // x = 30 // it is constant so cannot be updated
  var y = 40;
  console.log(v);
  console.log(x);
  console.log(y);
}
// f()

// scope is different for both in console and when we run in code or in vs code

// Note:- left closer to study
// ***************************** NESTED SCOPE ************************

function one()
{
    const username = "hitesh"

    function two()
    {
        const website = "github"
        console.log(username);
        
    }
    // console.log(website); // local scope inside two function
    two()
}
// one()

// +++++++++++++++++++++Interesting about functions++++++++++++++++++

addOne(5) // it will successfully print the value, no error
function addOne(num)
{
    return num + 1 
}

// The below function is also called expression and it is one of the way to write a function

// addTwo(6) // it will give error that addTwo() is not defined
const addTwo = function(num){
    return num + 2
}

/* 
There are many different ways to declare a function 
->A function declaration introduces a function by name and makes it available for use.
->A function definition refers to the content (logic) of the function, specifying what the function does.
*/
