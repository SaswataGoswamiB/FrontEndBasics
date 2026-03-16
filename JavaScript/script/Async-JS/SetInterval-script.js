

setTimeout(function(){
    console.log("HI there");
},2000)


// Runs at an interval of every 1 sec.--> after every 1 sec the call back method is  executed,
setInterval(function(){
    console.log("Hi there");
},1000); 


const hithere = setInterval(function(){
    console.log("Hi there");
},1000);

// Clearing the interval
clearInterval(hithere)