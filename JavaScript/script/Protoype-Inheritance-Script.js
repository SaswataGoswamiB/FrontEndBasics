// This is Called A constructor Function 
// because we are using it to create a new object.



function makeHuman(name,age){
this.name = name;
this.age = age;
// this.info = function(){
//     console.log("My name is "+ this.name + " and my age is "+ this.age);
// }
}

const human2 = new makeHuman("Arpita", 22);
const human1 = new makeHuman("saswata",24);



// function info in to som ehwere common so that human1 and human2 both can access it.
makeHuman.prototype.info = function(){
   console.log("My name is "+ this.name + " and my age is "+ this.age); 
}