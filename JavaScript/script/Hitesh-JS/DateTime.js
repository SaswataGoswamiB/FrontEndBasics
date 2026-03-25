let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
//toDateString() ---> 
// It returns the date portion of a Date object as 
// a string.
console.log(myDate.toDateString());
console.log(typeof myDate);

//create a date object for a specific date
let specificDate = new Date('2022-01-01');
console.log(specificDate);
console.log(specificDate.toString());

let specificDate2 = new Date(2022, 0, 1,7,30,12); 
// month is 0-indexed
console.log(specificDate2);
console.log(specificDate2.toString());

// Time 
let currentTime = Date.now();
console.log(currentTime); // Output: Current time in milliseconds since January 1, 1970
console.log("Old time "+specificDate2.getTime());