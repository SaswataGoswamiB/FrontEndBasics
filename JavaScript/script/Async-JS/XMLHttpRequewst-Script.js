const xhr = new XMLHttpRequest();
const REQUEST_URL = "https://randomuser.me/api/";
// At Every Stage we have States.

//Sending a request to the server
xhr.open('GET', REQUEST_URL);

//on state Change
xhr.onreadystatechange=onstatechangea;

xhr.send();

// See the Response

 // var xhr = new XMLHttpRequest();

 // xhr.open('GET',URL);

 // xhr.onreadystatechange = onstatechange;

 //xhr.send();

  function onstatechangea(){
    if(xhr.readyState == 4){
        const data = xhr.responseText;
        const finaldata = JSON.parse(data);
        console.log(finaldata);
    }
 }

function onstateChange(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
    // this is the data
    const data = xhr.responseText;
    //But this is a string, we need to convert it to JSON Object
    console.log(`The type is ${typeof data}`);// String
    console.log(xhr.responseText);

    const finaldata = JSON.parse(data);
    console.log(typeof finaldata);// Object
    console.log(finaldata);
}

}
