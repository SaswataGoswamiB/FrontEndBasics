// steps to create a custom event handler:

// step 1 : create a custom event using event .

const saswataevent = new Event("saswataevent");

// add event litener to the target elememt here button with id "CutomEventButton"
document.querySelector("#CutomEventButton").addEventListener("saswataevent",function(){
    console.log("Custom event triggered");
});


// trigger/dispatch the cuctom event
document.querySelector("#CutomEventButton").dispatchEvent(saswataevent);
