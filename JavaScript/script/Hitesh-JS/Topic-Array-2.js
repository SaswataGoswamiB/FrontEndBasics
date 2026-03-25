const marvel_hereos = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const marvel_hereos_copy = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const marvel_heroes2 = ["Doctor Strange", "Black Panther", "Spider-Man"];

marvel_hereos.push(marvel_heroes2);
console.log(marvel_hereos);
//output: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", ["Doctor Strange", "Black Panther", "Spider-Man"]]

// concatenation of arrays
const final_lsit = marvel_hereos_copy.concat(marvel_heroes2);
console.log(final_lsit);
//output: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Doctor Strange", "Black Panther", "Spider-Man"]


//spread operator
const spreadoperator=[...marvel_hereos_copy,...marvel_heroes2];
console.log(spreadoperator);
//output: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Doctor Strange", "Black Panther", "Spider-Man"]


const numbers = [1, 2,[3,4],5,[6,[7,8]]];
//flat() ---> It creates a new array with all 
// sub-array elements concatenated into it 
// recursively up to the specified depth.

const flatNumbers = numbers.flat(2);
// 2 is the depth till which it should flatten.
// u can put infinity to flatten all the levels of 
// nested arrays.


console.log(flatNumbers);
//output: [1, 2, 3, 4, 5, 6, 7, 8]



//Array.from() ---> It creates a new, 
// shallow-copied Array

const str = "Hello";
const arrFromStr = Array.from(str);
console.log(arrFromStr);
//output: ["H", "e", "l", "l", "o"]

//Interveiw
const str2 ={name :"Saswata"};
const arrFromStr2 = Array.from(str2);
console.log(arrFromStr2);
//output: [] because str2 is not iterable.


let score1 = 100;
let score2 = new Number(200);
let score3 = Number(300);

console.log(Array.of(score1, score2, score3));
//output: [100, Number {200}, 300]