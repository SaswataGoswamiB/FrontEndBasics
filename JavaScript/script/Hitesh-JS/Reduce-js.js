const myNums = [1, 2, 3,4,5,6,7,8,9,10];

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0);
console.log(myTotal);