let score =33;
console.log(typeof score);


let name ="33"
console.log(typeof(name));


let valueinString  = Number(name);
console.log(typeof valueinString);

let valueinNumber = String(score);
console.log(typeof valueinNumber);


// Always Check if the value is NaN or not 
// before using it in any calculation
console.log("NaN value");
let numberchar = "33abc";
let converttonumber = Number(numberchar);
console.log(converttonumber);
console.log(typeof converttonumber);


//Null to number returns Zero
console.log("Null value--> Number");
let valuenull = null;
let converttonumber2 = Number(valuenull);
console.log(converttonumber2);
console.log(typeof converttonumber2);

// true to number returns 1
//false to number returns 0
console.log("Boolean value--> Number");
let valueboolean = true;
let converttonumber3 = Number(valueboolean);
console.log(converttonumber3);
console.log(typeof converttonumber3);


//Boolean is used to convert to Booelan value
console.log("Number value--> Boolean");
let valueboolean2 = 0;
let converttoboolean = Boolean(valueboolean2);
console.log(converttoboolean);
console.log(typeof converttoboolean);