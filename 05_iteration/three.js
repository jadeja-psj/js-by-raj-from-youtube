// using .reduce value

const myNum = [1, 2, 3];

// let myTotal = myNum.reduce(function (acc,currVal){
//     console.log(`acc: ${acc} and currval: ${currVal}`);

//     return acc + currVal
// },0) // it is intialValue

// using arrow function

// const myTotal = myNum.reduce((acc,currVal) => acc+currVal,0)

// console.log(myTotal);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
