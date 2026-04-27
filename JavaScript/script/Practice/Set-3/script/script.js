var add = document.getElementById("name");
var button = document.getElementById("btn");

button.addEventListener("click",(e)=>{
    e.preventDefault();
    if(add.value.trim() === ''){
    }
    else{
        var li = document.createElement("li");
        li.textContent = add.value;
        var dolisitem = document.querySelector("ul");
        dolisitem.appendChild(li);
        add.value = "";
    }
});
