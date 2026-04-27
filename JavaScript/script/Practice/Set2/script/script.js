var name = document.getElementById("name");
var email = document.getElementById("email");
var btn = document.getElementById("btn");
var error = document.getElementById("error");

// all fields at once----> using queryselectorall---> retuns NodeList
var allatonce = document.querySelectorAll('input');
var allatoncetext = document.querySelectorAll('input[type="text"]'); 


// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     if(name.value === '' || email.value === ''){
//         error.textContent = "Please fill in all fields.";
//         error.style.color = "red";
//         error.style.fontSize = "20px";
//         error.style.fontStyle = "italic";
//         error.style.fontWeight = "bold";
//         error.style.transition = "all 0.5s ease-in-out";
//         error.style.marginTop = "10px";
//     }
//     else{
//         error.textContent = "";
//         error.style.transition = "all 0.5s ease-in-out";
//     }
// });


// same logic using queryselectorall
var allatonce = document.querySelectorAll('input');

var form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault(); 
allatonce.forEach((x)=>{
    if(x.value.trim() === ''){
        error.textContent = "Please fill in all fields.";
        error.style.color = "red";
        error.style.fontSize = "20px";
        error.style.fontStyle = "italic";
        error.style.fontWeight = "bold";
        error.style.transition = "all 0.5s ease-in-out";
        error.style.marginTop = "10px";
    }
    else{
        error.textContent = "";
        error.style.transition = "all 0.5s ease-in-out";
    }
})

});