
// fetch is async by default.
// So it oges into call back queue
//
console.log("Using Fetch");
const hey =fetch("https://randomuser.me/api/").
then(blob=>blob.json())
.then(read=>console.log(read));

console.log("Printing value of Hey ")
console.log(hey);



const data = fetch("https://randomuser.me/api/").
then(blob=>blob.json()).
then(data=>console.log(data));


