const name = "GithubMaster"
const repoCount = 100
// console.log(name + repoCount + "Value") // the given way is not prefered 

// Therefore we use string Interpolation for that we write everything inside backticks

// console.log(`Hello my name is ${name} and total count of my reop is ${repoCount}`);

const gameName = new String('githubcamp')

// console.log(gameName[0]) // it works like array output:'g'
// console.log(gameName.__proto__) // output:{}
// the above will be shown empty but there are many maethods that we can see on browser console

// some of the methods
// console.log(gameName.length); // it will print the length of the string
// console.log(gameName.toUpperCase()); //it will convert the string to uppercase
// console.log(gameName.charAt(0)); // used to find char at the specific position
// cponsole.log(gameName.indexOf('g')) // used to find the position of the specific charater in a string

// when you get free than once write an article on how many strings methods are there and how they works

// some more methods

const newString = gameName.substring(0,4)
console.log(newString) // used for slicing start from 0 and end at 4 but the ending index will not be included

const anotherString = gameName.slice(0,4) // it will also work same as .substring but the only thing here is we can also give negative indexing

const StringOne = "      Github      "
console.log(StringOne.trim()) // trim method is used to remove the unnecessary space before and after the string

// .replace, .include, .split

