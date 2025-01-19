// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // name iife
    console.log(`DB CONNECTED`)
})();

// unnamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('sam')