

console.log("Using Axios")


//using Axios
axios.get('https://randomuser.me/api/').
then(data=>
    console.log(data.data.results[0].name.first));

