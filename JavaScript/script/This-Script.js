// this
// global this ---> Window 
// function this ---> Window
// method this ---> Object which is calling the method
//function nside a method --> Windiow Object -->ES5
//function inside a method --> Object which is calling the method -->ES6
// this inside of a constructor function --> new blank object
// this insde of a event listener --> element which is listening the event



//global this ---> Window
console.log("Testing this globally");
console.log(this);

// function this ---> Window
function testmyfunc() {
    console.log("Testing this inside a function");
    console.log(this);
}

testmyfunc();

//method this ---> Object which is calling the method
var obj = {
    name: function () {
        console.log("Testing this inside a method-2");
        console.log(this);
    },
    email: "wwfwfwf",
    contact: "fwfwefewf"

}
console.log("Testing this inside a method-1");
obj.name();

// here this = whole obj object that usee in the code.So when u print obj.name(); the whole object is print .
//But if we do this.email then only email value is print because this is refering to whole object and email is the property of that object. So this.email is print the value of email property which is "wwfwfwf".: 

var obj = {
    name: function () {
        console.log("Testing this.email inside a method-2");
        console.log(this.email);
    },
    email: "wwfwfwf",
    contact: "fwfwefewf"

}
console.log("Testing this.email inside a method-1");
obj.name();

console.log("Function inside of MEthod-->ES5")
var saswata = {
    name: "saswata",
    age: 24,
    email: function () {
        // this is inside a method 
        console.log("Inside of method")
        console.log(this);
        // function insde of a method
        function test() {
            console.log("Inside of Method inside of function")
            console.log(this);
        }
        test();
    }
}

saswata.email();


console.log("Function inside of MEthod-->ES6")
var saswata = {
    name: "saswata",
    age: 24,
    email: function () {
        // this is inside a method 
        console.log("Inside of method")
        console.log(this);
        // function insde of a method
        const test = ()=>{
            console.log("Inside of Method inside of function")
            console.log(this);
        }
        test();
    }
}

saswata.email();


//inside fo an event listsner
document.querySelector("button")
.addEventListener("click",function(){
    console.log("Testing this inside of an event listener");
    console.log(this);
})



