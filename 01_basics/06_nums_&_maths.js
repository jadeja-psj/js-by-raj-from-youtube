const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966
// const otherNumber = 123.8966
const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3)); // it gives the number of digits mentions in .toPrecision(n) 

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // default value is based on US standards.

// console.log(hundreds.toLocaleString('en-IN')); // This is indian standards  


// ++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5324));
// console.log(Math.floor(4.9)); // it will choose the nearest smallest value
// console.log(Math.ceil(4.2)); // it will choose the nearest larger value

// console.log(Math.min(4,5,7,9,3,0.1));
// console.log(Math.max(4,5,7,9,3,0.1));

// console.log(Math.random()); // it will give the value between the range of 0-1
// console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * ((max - min) + 1)) + min)

// pow(), sqrt(), abs(), sin(), cos(), log(), log2(), log10()