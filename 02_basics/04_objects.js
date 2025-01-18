// const tinderUser = new Object()//{} // singleton object
const tinderUser = {} //{} // non-singleton objects 

tinderUser.id = "567abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@google.com",
    fullname:{
        userfullname:{
            firstname:"sunny",
            lastname:"sxyz",
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname)

// console.log(regularUser.fullname?.userfullname.lastname) // 
// we the above when the response is comming from api that is the given value is there then do this otherwise some another work

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a", 4: "c"}

// merge two objects into single object
// const obj3 = Object.assign({}, obj1, obj2)
// the curly bracese is says that all the values will be inside that braceses garnted that result will be here only

// merge by spread operation
// const obj3 = {...obj1,...obj2}

// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'c' }

// when values will come from database

const users = [
    {
        id : 1,
        email:"s@gmail.com"
    },
    {
        id : 1,
        email:"p@gmail.com"
    },
    {
        id : 1,
        email:"S@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))// it will give values in array
// console.log(Object.entries(tinderUser)) // it will make all the key value pair as a array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) 
// if the given property is in the object than true else false


// Destructuring
const course = {
    coursename: "Js in hindi",
    price:"free",
    courseInstructor: "hitesh"
}

// course.courseInstructor // it is the one way to access the elements inside the object

// another way--> it is useful when we want to use the keys more than one time and we can also give another name/Alias name  to any keys if we 

const {courseInstructor:instrctor,coursename,price} = course
// console.log(instrctor);

// JASON syntax  
// when we deal with api then values comes in JASON formate which is shown below


// {
//     "name":"rushi",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// some times we get api in array formate as shown below

[
    {},
    {},
    {}
]

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }