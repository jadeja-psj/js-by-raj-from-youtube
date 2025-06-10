const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        
        vaildateGuess(guess)
    });
}

// validate whether the number is between 1 to 100 or not
function vaildateGuess(guess){
    if(isNaN(guess))
    {
        alert('Please enter a valid number')
    } else if(guess < 1)
    {
        alert('Please enter a valid number')
    }else if(guess > 100){
         alert('Please enter a valid number')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// The value is equal to random number or not
function checkGuess(guess){
    // 
}

// clean the value, it will update the Guess and remaining guess
function displayGuess(guess)
{
    // 
}

// it will print the message
function displayMessage(message){
    // 
}

function endGame(){
    // 
}

function newGame(){
    // 
}





