
let value = 3;
 let negvalue = -value;


 let string = "Hitesh";
 let string2 ="Saswata";

 let string3 = string+string2;
 console.log(string3);


// problem : reason is ECMA Script specification 
// defines that if any one of the operand is string 
// then it will convert the other operand to string 
// and then perform concatenation operation.
//12
console.log(1+"2");
//12
console.log("1"+2);
//122
console.log("1"+2+2);
//32
console.log(1+2+"2");

// JavaScript evaluates left → right, and:

// If any operand is a string, + becomes string concatenation
// Otherwise, it does numeric addition