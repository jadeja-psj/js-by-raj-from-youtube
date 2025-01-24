// coding = ["js", "ruby","java","python","cpp"]

// when we use forEach loop and try to return a value than it does not do that. because it does not return a value

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item

// })

// console.log(values); // it prints undefined

// Now what to do if what to return some values

//Note:
// To solve the above problem we will use an another method filter
// filter returns the value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => {
//     return num > 4
// }) //[ 5, 6, 7, 8, 9, 10 ]
//  another method

// const newNums = myNums.filter( (num) => num>4) //[ 5, 6, 7, 8, 9, 10 ]

// if we want to do the same thing using filter than
/*
const newNums = []
myNums.forEach( (num) =>{
    if(num > 4){
        newNums.push(num)
    }
} )*/

// console.log(newNums);

// *******************************************************************
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.publish >= 1992);

userBooks = books.filter((bk) => bk.edition <= 2000);
// console.log(userBooks);

// *******************************************************************
// ***************************************************************** ********************************************************************  ++++++++++++++++++++++++++++++MAP+++++++++++++++++++++++++++++++++++

const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let NewNums  = myNums.map((num) => num+10)
// console.log(NewNums);

// Chaning of the methods

// In JavaScript, chaining refers to the technique of calling multiple methods on the same object in a single statement. It allows you to "chain" method calls together, improving code readability and reducing redundancy.

let NewNums = MyNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40);

console.log(NewNums);

