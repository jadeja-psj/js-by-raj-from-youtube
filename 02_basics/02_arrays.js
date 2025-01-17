const  marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) // it will add a sub array inside the original marvel_heros 
// the output of the above will be 
// console.log(marvel_heros);
//the output of the above will be- [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const all_heros = marvel_heros.concat(dc_heros) // used to merge to arrays
// console.log(all_heros);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// concate two arrays using spread or spreading two arrays
// const all_new_arrays = [...marvel_heros,...dc_heros]
// console.log(all_new_arrays)
// the above will also give the same output as concat method

const another_array = [1,2,3,[4,5,6],7,8,[9,0,[1,2,3]]]
// if there is situation as shown in the another_array then to resolve it you can use. flat() method

const real_another_array = another_array.flat(2)
// console.log(real_another_array);

// To check whether the given is arrya or not
// console.log(Array.isArray("Hello")) // false


// Now if i want to convert the above "Hello string to array then use .from(content)"
// console.log(Array.from("Hello"));


// convert the variables into array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

