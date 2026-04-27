document.getElementById("btn").addEventListener("click", function(){
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");

    var src1 = img1.src;
    var src2 = img2.src;

    img1.src = src2;
    img2.src = src1;
});