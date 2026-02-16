// this
// global this ---> Window 
// function this ---> Window
// method this ---> Object which is calling the method

console.log("Testing this globally");
console.log(this);
function testmyfunc(){
    console.log("Testing this inside a function");
    console.log(this);
}

testmyfunc();


var obj = {
    name : function(){
        console.log("Testing this inside a method-2");
        console.log(this);
    },
    email :"wwfwfwf",
    contact : "fwfwefewf"

}
console.log("Testing this inside a method-1");
obj.name();

// here this = whole obj object that usee in the code.So when u print obj.name(); the whole object is print .
//But if we do this.email then only email value is print because this is refering to whole object and email is the property of that object. So this.email is print the value of email property which is "wwfwfwf".: 

var obj = {
    name : function(){
        console.log("Testing this.email inside a method-2");
        console.log(this.email);
    },
    email :"wwfwfwf",
    contact : "fwfwefewf"

}
console.log("Testing this.email inside a method-1");
obj.name();


