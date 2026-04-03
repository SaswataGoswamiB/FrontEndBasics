const score = 400;

const balance  = new Number(100);

const anotherBalance = new Number(200);
console.log(anotherBalance+balance);

//toFixed ---> 
// it will round the number to the specified number 
// of decimal places and return it as a string.
const dec = 100.5353535353535353535;
const  updatedDec = dec.toFixed(2);
console.log(`The value of dec is ${updatedDec} and the type of updatedDec is ${typeof updatedDec}`);

//toPrecision ---> 
// it will round the number to the specified number 
// of significant digits and return it as a string.
const dec2 = 100.6353535353535353535;
console.log(dec2.toPrecision(5));
console.log(`The value of dec2 is ${dec2.toPrecision(4)} and the type of dec2 is ${typeof dec2.toPrecision(4)}`);


const dec3 = 100.6353535353535353535;
console.log(dec3.toPrecision(3));
console.log(`The value of dec3 is ${dec3.toPrecision(3)} and the type of dec3 is ${typeof dec3.toPrecision(3)}`);








//Maths ---> JavaScript provides a built-in Math object that contains properties and methods for performing mathematical operations. Here are some commonly used Math methods:

//Math.round() ---> It rounds a number to the nearest integer.
console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(4.3)); // Output: 4

//abs() ---> It returns the absolute value of a number.
console.log(Math.abs(-5)); // Output: 5
console.log(Math.abs(5));  // Output: 5 

//Math.ceil() ---> It rounds a number up to the nearest integer.
console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.ceil(4.8)); // Output: 5       

//Math.floor() ---> It rounds a number down to the nearest integer.
console.log(Math.floor(4.2)); // Output: 4
console.log(Math.floor(4.8)); // Output: 4  

//Math.max() ---> It returns the largest of zero or more numbers.
console.log(Math.max(1, 5, 3)); // Output: 5
console.log(Math.max(-1, -5, -3)); // Output: -1    

//Math.min() ---> It returns the smallest of zero or more numbers.
console.log(Math.min(1, 5, 3)); // Output: 1
console.log(Math.min(-1, -5, -3)); // Output: -5 

//Math.random() ---> 
// It returns a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); // Output: A random number between 0 and 1
console.log(Math.random() * 10); // Output: A random number between 0 and 10


const max = 20;
const min = 10;
// Mostly used
 console.log(Math.floor(Math.random() * (max - min + 1)) + min);