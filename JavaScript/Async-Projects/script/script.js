function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById("start").addEventListener("click",()=>{
    const intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000);

    document.getElementById("stop").addEventListener("click",()=>{
        clearInterval(intervalId);
        console.log("Interval Stopped!");
    })
})