function abcd(){
    var count = 0;
    function innerfunction() {
        count++;
        console.log(count);
    }
    return innerfunction;
}


var x = abcd();
x();
x();
x();