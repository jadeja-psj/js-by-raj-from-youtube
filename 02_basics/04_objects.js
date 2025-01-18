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

console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))// it will give values in array
console.log(Object.entries(tinderUser)) // it will make all the key value pair as a array

console.log(tinderUser.hasOwnProperty('isLoggedIn')) 
// if the given property is in the object than true else false
