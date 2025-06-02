const accountId = 14453
let accountEmail = "fast@gamil.com"
let accountPassword = "1234"
accountCity = "Delhi"

// accountId = 2 it will give error as it is const no the variable
console.log(accountId);
accountEmail="fast123@gamil.com"
accountCity="Noida"
accountPassword="5465"

console.table([accountEmail,accountPassword, accountCity]);

/*
   prefere not to use var
   because of issue in block scope and functional scope 
*/ 

