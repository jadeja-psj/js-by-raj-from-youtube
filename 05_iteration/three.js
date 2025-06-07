// using .reduce value

// const myNum = [1, 2, 3];

// let myTotal = myNum.reduce(function (acc,currVal){
//     console.log(`acc: ${acc} and currval: ${currVal}`);

//     return acc + currVal
// },0) // it is intialValue

// using arrow function

// const myTotal = myNum.reduce((acc,currVal) => acc+currVal,0)

// console.log(myTotal);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const shoppingCart = [
//   {
//     itemName: "js course",
//     price: 2999,
//   },
//   {
//     itemName: "py course",
//     price: 999,
//   },
//   {
//     itemName: "mobile dev course",
//     price: 5999,
//   },
//   {
//     itemName: "data science course",
//     price: 12999,
//   },
// ];

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// console.log(priceToPay);

// ************************* Practice *******************************

const arr = [1,2,3,4]

// for(const i of arr){
//   console.log(i);
  
// }


const greetings = "Hello world!"
// for(const greet of greetings)
// {
//   console.log(`Each char is ${greet}`);
  
// }


// Maps

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of Amaerica")
// map.set('Fr',"France")
// map.set('IN',"India")

// console.log(map);

// for(const [key, value] of map)
// {
  // console.log(key, ':-', value );
  
// }


const myObject  = {
  js:'javascript',
  cpp:'C++',
  rd:"ruby",
  swift:"swift by apple"
}

for(const key in myObject)
{
  // console.log(myObject[key]);
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rd","py","java","cpp"]

for(const key in programming){
  // console.log(key);
  // console.log(programming[key]);
  
}


const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function (item){
  // console.log(item);
  
})

// coding.forEach((val) => {
//   console.log(val);
// })

function printMe(item){
  // console.log(item);
}

coding.forEach(printMe)


coding.forEach((item, index, arr)=>{
  // console.log(item,index,arr);
  
})


const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]


// myCoding.forEach( (item) => {
//   // console.log(item.languageName);
  
// })

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => num > 4)

// const newNums = []
// myNums.forEach((num)=>{
//   if(num > 4){
//     newNums.push(num)
//   }
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk)=>{bk.genre ===  'History'})

userBooks = books.filter((bk)=>{bk.publish >= 2000})

console.log(userBooks);



