// This is Called A constructor Function 
// because we are using it to create a new object.
function makeHuman(name,age){
this.name = name;
this.age = age;
// this.printmyName = function () {
//     console.log(this.name);
// }
}


makeHuman.prototype.printmyName= function(){
    console.log(this.name);
}

const human2 = new makeHuman("Arpita", 22);
const human1 = new makeHuman("saswata",24);
