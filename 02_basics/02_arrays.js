// const  marvel_heros = ["thor", "Ironman","spiderman"]
// const dc_heros = ["superman","flash","batman"]

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

// const another_array = [1,2,3,[4,5,6],7,8,[9,0,[1,2,3]]]
// if there is situation as shown in the another_array then to resolve it you can use. flat() method

// const real_another_array = another_array.flat(2)
// console.log(real_another_array);

// To check whether the given is arrya or not
// console.log(Array.isArray("Hello")) // false


// Now if i want to convert the above "Hello string to array then use .from(content)"
// console.log(Array.from("Hello"));


// convert the variables into array
// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3))



// ************************* Arrays Part 2 practice****************

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) // it will give push the dc heroes as an array inside marvel heroes, the entire array of dc heroes will be tereated as a single element in marvel heroes

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]); //[ 'superman', 'flash', 'batman' ]
// console.log(marvel_heroes[3][2]); //batman

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // it is used to merge to array in new array
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

console.log(Array.from({name: "hitesh"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


