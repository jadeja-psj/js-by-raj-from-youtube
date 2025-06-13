const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log(    "Async task 2");
        resolve()
    }, 1000);

}).then(function(){
    console.log("Async 2 resolve");
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@example.com"})
    }, 1000)
})


promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Fast", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either resolve or rejected"))


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javaScript", password: "fast"})
        }else{
            reject('ERROR: Js went wrong')
        }
    }, 1000)
})


async function consumePromiseFive({
    
})