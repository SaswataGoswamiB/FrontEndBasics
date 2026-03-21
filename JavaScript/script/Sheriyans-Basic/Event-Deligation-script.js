document.querySelector("#parent").addEventListener("click",function(detail){
    console.log(detail);
    if(detail.target.id == "btn"){
        console.log("Btn1  clicked");
    }
    if(detail.target.id == "btn2"){
        console.log("Btn2  clicked");
    }
});