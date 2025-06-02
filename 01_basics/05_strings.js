const name = "hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length); // to find the length of the string 
// console.log(gameName.toUpperCase()); // to chage the string to upper case but it will not make any change in the original string.
console.log(gameName.charAt(2)); // to find the character at the given position

console.log(gameName.indexOf('t')); // to get the index of the specific charater

const newString = gameName.substring(0,4) // it is used to get the a part of string.
console.log(newString);


const anotherString = gameName.slice(-8,4) // it is same as substring the only difference is that we can give the negative value.
console.log(anotherString);

// the -ve indexing starts from the end.

const newStringOne = "     Fast    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Fast.com/fast%20use"

console.log(url.replace('20%', '-'))
console.log(gameName.split('-'));

