const score = 400
// console.log(score) // It automatically detects that the given score is in number 
// output:400


const balance = new Number(100)
// console.log(balance) // it will specifically cast th value in number and tell us that it is a number
// output: [Number: 100] it is casted specially in number


// Try the above code in the console and you will get the methods on Number 

// Some of its properties are:
//console.log(balance.toString().length) //convert the num to string and print the length of the string
// console.log(balance.toFixed(2))
// It will print only 2 numbers after a decimal point

const otherNumber = 23.8966

//console.log(otherNumber.toPrecision(3)); //precise for 3 and other will be round off
//the values should be between 1-21 to get the precisie value

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')) // 10,00,000
// By default it use us standard, so Indian std 'en-IN'

// ***********************Maths**********************

// console.log(Math); //Object [Math] {}
// it is object and it also has many methods that you can see on console
// some methods
// console.log(Math.abs(-4)); // 4
// abs -> absolute value it converts -ve value to +ve
// +ve will not be changed
// console.log(Math.round(4.6))//5 it will round of the num
// console.log(Math.ceil(4.2))//ceil->roundup only to upper value //5
// console.log(Math.floor(4.9))//floor->roundup only to the lesser value // 4
// console.log(Math.min(4,3,0,5,6)) // 0
// console.log(Math.max(4,3,0,5,6)) // 6

console.log(Math.random()); // it will give the values between 0 to 1 by default

console.log((Math.random()*10) + 1); // min value will be 1
console.log(Math.floor(Math.random()*10) + 1);

// another value
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)

