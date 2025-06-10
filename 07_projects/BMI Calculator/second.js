const form = document.querySelector('form')

// This practice is wrong because it will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)


        // show results 
        if (bmi < 18.6) {
            result.innerHTML = `<span>${bmi} <br> You are underweight</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span>${bmi} <br> You are in Normal Range</span>`;
        } else {
            result.innerHTML = `<span>${bmi} <br> You are Overweight</span>`;
        }


    }

    

})