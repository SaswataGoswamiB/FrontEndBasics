
document.querySelector("#parent").addEventListener("click",function(details){
    console.log(details);
    if(details.target.id == "btn"){
        console.log("Btn1  clicked");
    }
    if(details.target.id == "btn2"){
        console.log("Btn2  clicked");
    }
})