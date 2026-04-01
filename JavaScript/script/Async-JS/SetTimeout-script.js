const saswata = function(){
    console.log("I am Saswata");
};

const ChangeText = function(){
    document.querySelector('h1').innerHTML = "Hey There Welcome";
};

setTimeout(ChangeText, 2000);

const buttonChnaged = function(){
    document.querySelector('button').addEventListener('click', function(){
        // This will prevent the ChangeText function from executing after 2 seconds.
        clearTimeout(ChangeText);
        console.log("STOPPED!");
    })};