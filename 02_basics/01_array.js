// array
// In JS arrays are resizeable can contain mix of different datatypes. 
// JS arrays are not associative arrays, it cannot be accessed by arbitary strings as indexes.
// In JS array-copy operations create shallow copies.
// shallow copy -> copy whose properties share the same references
// Deep copy -> copy of an object whose properties do not share the same references

const myArr = [9,8,6,3,5,1,7];
const myHeros = ["shaktimaan", "naagraaj","ironman","thomas"];
const myArr2 = new Array(1,2,3,4,5,6)

// console.log(myArr[0]) // used to access the element by indexing
// console.log(myHeros[2]);

// Arrays methods 
myArr.push(10); // it will add the element at the end of the array
// console.log(myArr);
myArr.pop();// it will remove the last element from the array
// console.log(myArr);
myArr.unshift(11); // it is used to ad the specific element at the strating of the arrya
// console.log(myArr)
myArr.shift() // it is used to remove the first element of the array
// console.log(myArr)

// console.log(myArr.includes(5)); // it checks wwhether the speific element exists in the array or not, if the element exists it will print true else it will print false

// console.log(myArr.indexof(5)) // if the element exists then it will print the index of the element else it eill print -1. 

const newArr = myArr.join() // convert the type of array from object to string

// console.log(newArr)
// console.log(myArr)

// console.log(typeof newArr) //string

// slice, splice

const myn1 = myArr.slice(1,3) // it will print the element that is included between index 1 and index 3 and here index 3 is not included
console.log("A ",myArr);
console.log(myn1)

console.log("B ",myArr);

console.log("Before spliceing the array");

const myn2 = myArr.splice(1,3)
console.log("After splicing")
console.log("C ",myArr);

// difference between splice and slice
/*
splice -> it includes the ending index and also it make changes in the original array.
slice -> neither it includes the ending index and nor it makes changes in original array
*/

