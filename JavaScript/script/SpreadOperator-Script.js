// Spread operator :

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Here the value is not copied from arr1 to arr3 but the reference is copied. 
// So when we change the value of arr3 then the value of arr1 also change because 
// both are refering to same array in memory.
const arr3 = arr1;

// We are using Spread Operator on Primitive Data
// and on PrimtiveDta only value is copied not the reference.
// So when we change the value of arr4 then the value of arr1 will not change 
// because both are refering to different array in memory.
const arr4 =[...arr1];
console.log(arr4);
arr4[0]=10;
console.log("Value of arr1[0] after modifying arr4:", arr1[0]); // value is 1 because we are using spread operator so the value is copied from arr1 to arr4. So when we change the value of arr4 then the value of arr1 will not change because both are refering to different array in memory.

// Here we are using Spread Operator on Reference Data and in reference Data is Shallow copied by Memory Address. 
// So when we change the value of arr6 then the value of arr5 also change because both are refering to same 
// array in memory.

const arr5 = [{id: 11}, {id: 22}];
const arr6 = [...arr5];
arr6[0].id = 99;
console.log(arr5[0].id);  // value is 99 because we are using spread operator on reference data so the reference is copied
//  from arr5 to arr6. So when we change the value of arr6 then the value of arr5 also change because both are refering 
// to same array in memory.

//Deep Copy
const arr7 = [{id: 11}, {id: 22}];
const arr8 = JSON.parse(JSON.stringify(arr7));
arr8[0].id = 99;
console.log(arr7[0].id);  // value is 11

//Merguing usingn spread Operator
const arr9 = [1, 2, 3];
const arr10 = [ 4, 5, 6];
const arr11 = [...arr9, ...arr10];
console.log(arr11);


// in Functions 

const numbers = [5, 2, 8];
Math.max(...numbers);
