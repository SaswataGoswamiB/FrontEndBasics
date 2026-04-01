// const promiseone = new Promise(function(resolve,reject){
// // Do any asynmc Task
// // Db Clls
// setTimeout(()=>{
//     console.log("Async Task is completed");
//     resolve();
// },1000)

// });

// promiseone.then(function(){
//     console.log("Promise is consumed");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async 2nd Task is completed");
//          resolve("Data is fetched");
//     },1000)
// }).then((data)=>{
//     console.log("Promise is consumed", data);
// })


// new Promise((resolve,reject)=>{

//     resolve({username:"Saswata",age:22});
// }).then((data)=>{
//     console.log("Promise is consumed", data);
// });



// new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve({username:"Saswata",age:22});
//     }else{
//         reject("Error: Something went wrong");
//     }
// }).then((data)=>{
//     console.log("Promise is consumed", data);
// }).catch((error)=>{
//     console.log("Error is ", error);
// }).finally(()=>{
//     console.log("This will run regardless of the outcome of the promise.");
// });



// chaining of promises
