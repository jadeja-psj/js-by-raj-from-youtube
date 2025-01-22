// for loop is same as other languages
/* syntax of for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

/*
    While loop syntax

    while (condition) {
    
}*/

// Example
/* let index = 10
while(index <= 10)
{
    console.log(`value of the index is ${index}`);
    index = index + 2
} */

// do while statement syntax
/* do {
    
} while (condition); */

// for of loop
/*
const arr = [1,2,3,4,5]

for(const num of arr)
{
    console.log(num);
}*/
/*
const greetings = "Hello World!"

for(const greet of greetings)
{
    console.log(greet);
}*/


const map = new Map()
map.set('IN',"India")
map.set('USA',"United Stated of America")
map.set('Fr',"France")

// in map we print or give only uniqe value

// console.log(map);

// output
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United Stated of America',
//     'Fr' => 'France'
//   }


for(const key of map)
{
    // console.log(key);
    
}
// [ 'IN', 'India' ]
// [ 'USA', 'United Stated of America' ]
// [ 'Fr', 'France' ]

// if we want key and values different than 
for(const [key,value] of map)
{
    // console.log(key,":- ",value);
}
// output
// IN :-  India
// USA :-  United Stated of America
// Fr :-  France

// by the above method -> we can not use object inside of map

// To iterate in objects we use for in loop
// for in loop

const myobject = {
    js:'javascript',
    cpp:'C++',
    rd:"ruby",
    swift:'swift by apple'
}

for(const key in myobject)
{
    console.log(`${key} has the object ${myobject[key]}`);   
}

// Note: if we use the for in loop in array then key will give the index of the element and 
//arr[key] will give the value