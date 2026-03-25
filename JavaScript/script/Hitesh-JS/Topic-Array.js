const arr =[79,1212,2121231313,2424]
const heros =["Loki","SpiderMan","IronMan","Thor","Captain America"];

// push and pop
arr.push(2222);
arr.push(3333);
console.log(arr);
arr.pop();
console.log(arr);

// unshift and shift
arr.unshift(1111);//--> Starts at the end of the array.
console.log(arr);
arr.shift();
console.log(arr);

//includes
console.log(arr.includes(1212)); // Output: true
console.log(arr.includes(9999)); // Output: false

//indexof
console.log(arr.indexOf(1212)); // Output: 1
console.log(arr.indexOf(9999)); // Output: -1

//slice vs splice
//slice(start, end) ---> 
// It returns a shallow copy of a portion of 
// an array into a new array object selected from 
// start to end (end not included).
const slicedArr = arr.slice(1, 3);
console.log(slicedArr);

//splice(start, deleteCount, item1, item2, ...) --->
// It changes the contents of an array by removing 
// or replacing 
// existing elements and/or adding new elements 
// in place.
 const arrnew = arr.splice(1, 2, 5555, 6666);
console.log(arr);// output: [79, 5555, 6666, 2424]
console.log(arrnew); // output: [1212, 2121231313]