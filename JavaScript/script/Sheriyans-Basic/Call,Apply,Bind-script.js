//call apply bind
const obj ={name : "Harsha",age: 24}


function test(){
console.log(this);
}


test.call(obj)