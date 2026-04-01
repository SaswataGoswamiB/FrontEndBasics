const interval = function(input){
    console.log(input +"::"+Date.now());
}

const intervalconst =  setInterval(interval, 2000, "Time is  ");

setTimeout(function(){
    clearInterval(intervalconst);
    console.log("Interval Stopped!");
},6000);