/* comparision operator
<, >, <=, >=, ==,!=,!==
->  == (it checks only value but does not checks the datatype)
->  === (strick checking it also checks the datatype also)

The if statement is used to execute a block of code only if a specified condition is true.

2. if...else Statement
The if...else statement provides an alternative block of code to execute if the condition is false.

3. if...else if...else Statement
This statement is used to test multiple conditions, executing the first block of code where the condition is true. */

/*

const temparature = 51

if(temparature<50)
{
    console.log("The temparature is less than 50");
}
else{
    console.log("The temparature is greater than 50");   
}
console.log("Hello everyone");
*****************************************************************************************
the below is called if, else ladder used for more than one condition

if{
    }
else if{
        }
else{
    }

*/


// Short hand code
// const balance = 1000
// here the scope is dertmined by the semicolan
// if(balance > 500) console.log("test"),console.log("test2"); // not a good practice



// Logical operator
// 1. && 2.||  3.!  

// switch case
// syntax

// the switch case depends upon the datatype if the datatype of the value to be compare is Number than the case should also be Number and if it is string than case should be string

const month = 6

switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default: 
        console.log("default case match");
        
        break;
}
