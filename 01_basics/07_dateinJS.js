// Dates

// let myDate = new Date()
// console.log(myDate); // 2025-01-10T05:25:25.633Z
// console.log(myDate.toString()); //Fri Jan 10 2025 05:26:52 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); //Fri Jan 10 2025
// console.log(myDate.toLocaleString());//1/10/2025, 5:30:57 AM
// console.log(typeof myDate); //object
// try more methods 
// 1. toDateString 2.toISOString  3.toJASON 
// 4.toLocaleDateString 5. toLocaleString 



//let myCreatedDate = new Date(2025,0,23) // year, month, date
// console.log(myCreatedDate.toDateString()); //Thu Jan 23 2025
// let myCreatedDate = new Date(2025,0,23,5,3);//yyyy,mm,dd hr,min,sec
// console.log(myCreatedDate.toLocaleString());
// 1/23/2025, 5:03:00 AM

// let myCreatedDate = new Date("2025-01-10"); //1/10/2025, 12:00:00 AM

// let myCreatedDate = new Date("01-10-2025");//1/10/2025, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// convert milli seconds to seconds
// console.log(Math.floor(Date.now()/1000));


// *************** DATES *********************

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  

// let myCreatedDate = new Date(2023, 0,23) 
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // we can also give the extra values for the time.
// console.log(myCreatedDate);
// let myCreatedDate = new Date("2023-01-14")// it is the YYYY-MM-DD formate

let myCreatedDate = new Date("01-14-2023") // In india we use the formate called MM-DD-YYYY

// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // it will convert the time into millisecond value

// console.log(Math.floor(Date.now()/1000)); // to convert into seconds


let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('deafult',{
    weekday: "long"
})

