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

var h1 = document.querySelector("h1");
h1.classList.add('makeitred');


//Creating element
var newElement = document.createElement("p");
newElement.textContent = "This is a new element created using JavaScript.";
newElement.classList.add("makeitred");
document.body.appendChild(newElement);