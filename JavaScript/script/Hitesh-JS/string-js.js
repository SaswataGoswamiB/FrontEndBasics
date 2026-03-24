const name = "Saswata";
const age = 23;

console.log(name+" "+age);


// String Interpolation
console.log("With  String Interpolation");
console.log(`My name is ${name} and my age is ${age}`);


const str = new String ("Saswata");

console.log(str[0]);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(3));
console.log(str.indexOf("a"));


// substring
const str1 ="Saswata_goswami";
const str2 = str1.substring(0,4);
console.log(str2); //---> Sasw

// slice
const s3 = str1.slice(0,4);
console.log(s3);// ---> Sasw


const s4 = str1.slice(-7,-4);
console.log(s4); //---> gos

// S a s w a t a _ g o s   w a   m  i
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
//-15 -14 -13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1

// Trim 
const newString = "    Spaces   "
console.log(newString.trim());
console.log(newString.trimStart());
console.log(newString.trimEnd());


//replace
const newString2 = "Saswata_goswami";
console.log(newString2.replace("a","A"));
if(newString2.includes("s")){
    console.log("String contains s");
    console.log(newString2.replaceAll("s","S"));
}

// split
const newString3 = "Saswata_goswami";
const arr = newString3.split("_");
console.log(arr);