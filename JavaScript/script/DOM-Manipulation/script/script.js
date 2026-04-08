var statuse = document.getElementById("btn");
var text = document.getElementById("text");
statuse.addEventListener("click",()=>{
    statuse.style.color = "red";
    statuse.style.fontSize = "30px";
    text.style.color = "blue";
    text.style.fontSize = "20px";
    text.style.fontStyle = "italic";
    text.style.fontWeight = "bold";
    text.style.transition = "all 0.5s ease-in-out";
});