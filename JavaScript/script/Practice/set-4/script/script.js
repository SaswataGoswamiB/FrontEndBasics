var prg = document.querySelector("#progress");


var count = 0;
 var int = setInterval((xyz)=>{
    if(count == 100){
        count = 0;
        clearInterval(int);
    }
    count++;
    prg.style.width = count+'%';
},100)