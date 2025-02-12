// A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

const promiseOne = new Promise(function(reject,resolve){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(reject,resolve){
    setTimeout(function(){
        console.log("Async task2 completed");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // we can also pass parameter in resolve most time it will ne object
        resolve({username: "chai", email: "chai@eample.com"})
    },1000)
})

promiseThree.then(function(user){
    // To take the data that we have given in resolve
    // We know that resolve and then is connect so the parameter or the data that we pass in resolve that directly comes into then
    console.log(user);
    
})

const promiseFour = new promise(function(reject,resolve){
    setTimeout(function(){
        let error  = true
        if(!error){
            resolve({username : "Fast", password: "0987"})
        }else{
            reject('ERROR: Something went worng')
        }
    },1000)
})

// the below is called chaining of then and catch
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    // Now were the value is going 
    // to get the value we another then with this function only and that is called then chaning.
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){ // to catch the error
    console.log(error);
}) // the finally block we definitely execute
.finally(()=> console.log("The promise is either resolve or rejected."))

const promiseFive = new Promise(function(reject,resolve){
    setTimeout(function(){
        let error  = true
        if(!error){
            resolve({username : "JavaScript", password: "0987"})
        }else{
            reject('ERROR: JS went worng')
        }
    },1000)
})

// async is same like .then we can use it instead of .then


// async function consumePromiseFive(){
//     const response  = await promiseFive  
//     console.log(response);
// }

// async await is not capable to handle the error directly
// So we put the code in try catch block

async function consumePromiseFive(){
    try{
        const response  = await promiseFive  
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

            // const data = await response.json()
// The data will not give the output because it is taking some time so we use awiat 
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

