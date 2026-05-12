const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map((x)=>{
    return x+10
});
console.log(myNumers);
console.log(newNums);


const finalNum = myNumers.map((x)=>{
    return x*2;
}).filter((x)=>{
    return x > 10;
});


console.log(finalNum);