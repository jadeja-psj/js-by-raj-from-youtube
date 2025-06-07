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


myCoding.forEach( (item) => {
  console.log(item.languageName);
  
})


