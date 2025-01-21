// If there is any value of the variable than it is assumed that it is true

// const username = "fast@google.com" //it is relevant email bcause it has value and we are directly passing a variable which has some. it is by default assumed by the system that the variable passed is true

// const username = "" // It is not an relevant email because the variable username has no value or is not initaialized so when we use the variable or a const directly inside the if else statement  it is by default assumed by the user that the value is false

if(username){
    console.log("it is relevant email");
}
else{
    console.log("It is not an relevant email");
    
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefiend, NaN

// all other values are truthy values

// some of the shoking truthy values are
// "0", "false", ' ', [],{}, function(){}


// to check that the array is empty or not

const username = " " //Array is empty
if(username.length === 0)
{
    console.log("Array is empty");
    
}
else{
    console.log("Array is not empty");
    
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
    
}

// Ternary operatory
// condition ? true : false

// Nullish Coalesing operator (??) : it is made for null and undefiend value

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefiend ?? 15
// val1 = null ?? 10 ?? 20  // it will be assign in the first value 