// let score = "33"

// console.log(typeof(score));
// console.log(score)
// let valueNumber = Number(score)

// console.log(typeof valueNumber)
// console.log(valueNumber) 

// 33 => number and will give the output 33

// let score = "33abcd"
// console.log(typeof(score))

// let valueNumber = Number(score)

// console.log(typeof (valueNumber))
// console.log(valueNumber)

// let valueBoolean = Boolean(score)
// console.log(typeof (valueBoolean))
// console.log(valueBoolean)

// observation 
// Number conversion
// "33abcd" => type number but value will be NaN
// boolean
// type => Boolean
// "33abcd" => true

// let score = true

// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// observation
// "33" => 33
// "33abfja" => NaN
// true => 1; false => 0
// null => 0; undefined => NaN

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)

// 1 => true; 0 => false;
// "" => false
// "hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

/*********************************Operations*******************/

let value = 3
let negativeValue = -value
// console.log(negativeValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%3)


let str1 = "hello"
let str2 = " boy"
let str3 = str1+str2 
// console.log(str3) // hello boy

// the below code or the way of writing is not appreciatable
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 +2)
// console.log(1 + 2 + "2")
// console.log(( 3 + 4 ) * 5 % 3);

// the below way of writing is code is not suggested
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// console.log(gameCounter++); // 100 because it is post-fix
// console.log(gameCounter); // 101

let count = 100
// console.log(++count); // 101 because pre-fix increment
// console.log(count) // 101 

// avoid the below conversion and comparision
// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true

// == operator works differently as compare to <, >, >=. as comapre to other languages

// === compare the value and also checks the datatype 
// the above is also called strict check
