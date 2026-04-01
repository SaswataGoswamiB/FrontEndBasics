function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


let intervalId;
document.getElementById("start").addEventListener("click",()=>{
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
        document.querySelector("h1").style.color = getRandomColor();
        document.querySelector("h2").style.color = getRandomColor();
    }, 1000);
})

 document.getElementById("stop").addEventListener("click",()=>{
        clearInterval(intervalId);
        console.log("Interval Stopped!");
    })